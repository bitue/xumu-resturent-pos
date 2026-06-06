import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const ALL_PERMISSIONS = [
  { name: 'admin.dashboard',    description: 'View admin dashboard & KPIs' },
  { name: 'admin.menu',         description: 'Manage menu items & categories' },
  { name: 'admin.staff',        description: 'Manage staff & user accounts' },
  { name: 'admin.reports',      description: 'View sales & analytics reports' },
  { name: 'admin.reservations', description: 'Manage table reservations' },
  { name: 'admin.orders',       description: 'View & manage all orders' },
  { name: 'pos.access',         description: 'Access POS terminal' },
  { name: 'kds.access',         description: 'Access Kitchen Display System' },
];

const ROLE_DEFAULTS: Record<string, string[]> = {
  SUPER_ADMIN:   ALL_PERMISSIONS.map(p => p.name),
  ADMIN:         ['admin.dashboard', 'admin.menu', 'admin.staff', 'admin.reports', 'admin.reservations', 'admin.orders'],
  MANAGER:       ['admin.dashboard', 'admin.menu', 'admin.reports', 'admin.reservations', 'admin.orders', 'pos.access'],
  CASHIER:       ['pos.access', 'admin.orders'],
  WAITER:        ['pos.access'],
  KITCHEN_STAFF: ['kds.access'],
};

const CATEGORIES = [
  { nameNl: 'Voorgerecht', nameEn: 'Appetizer', icon: '🥗', sort_order: 1 },
  { nameNl: 'Soep', nameEn: 'Soup', icon: '🍲', sort_order: 2 },
  { nameNl: 'Hoofdgerecht', nameEn: 'Main Course', icon: '🍽️', sort_order: 3 },
  { nameNl: 'Vis & Zeevruchten', nameEn: 'Seafood', icon: '🐟', sort_order: 4 },
  { nameNl: 'Vegetarisch', nameEn: 'Vegetarian', icon: '🥦', sort_order: 5 },
  { nameNl: 'Dessert', nameEn: 'Dessert', icon: '🍮', sort_order: 6 },
  { nameNl: 'Dranken', nameEn: 'Drinks', icon: '🥤', sort_order: 7 },
];

const STAFF_USERS = [
  { email: 'manager@xuma.nl',  fullName: 'Sophie de Vries',    role: 'MANAGER',       password: 'manager123' },
  { email: 'cashier@xuma.nl',  fullName: 'Lars Bakker',        role: 'CASHIER',       password: 'cashier123' },
  { email: 'waiter1@xuma.nl',  fullName: 'Emma Jansen',        role: 'WAITER',        password: 'waiter123' },
  { email: 'waiter2@xuma.nl',  fullName: 'Noah Smit',          role: 'WAITER',        password: 'waiter123' },
  { email: 'kitchen@xuma.nl',  fullName: 'Liam van den Berg',  role: 'KITCHEN_STAFF', password: 'kitchen123' },
];

async function main() {
  console.log('🌱 Seeding database...');

  // 1. Permissions
  const permMap: Record<string, bigint> = {};
  for (const perm of ALL_PERMISSIONS) {
    const p = await prisma.permissions.upsert({
      where: { name: perm.name },
      update: { description: perm.description },
      create: perm,
    });
    permMap[perm.name] = p.id;
  }
  console.log(`✅ ${ALL_PERMISSIONS.length} permissions seeded`);

  // 2. Roles
  const roleMap: Record<string, bigint> = {};
  for (const [roleName, permNames] of Object.entries(ROLE_DEFAULTS)) {
    const role = await prisma.roles.upsert({
      where: { name: roleName },
      update: {},
      create: { name: roleName, description: `${roleName} role` },
    });
    roleMap[roleName] = role.id;
    await prisma.role_permissions.deleteMany({ where: { role_id: role.id } });
    await prisma.role_permissions.createMany({
      data: permNames.map(pName => ({ role_id: role.id, permission_id: permMap[pName] })),
    });
    console.log(`✅ Role ${roleName} → ${permNames.length} permissions`);
  }

  // 3. Admin user
  const adminPw = await bcrypt.hash('admin123', 10);
  const admin = await prisma.users.upsert({
    where: { email: 'admin@xuma.nl' },
    update: { password_hash: adminPw },
    create: { email: 'admin@xuma.nl', password_hash: adminPw, full_name: 'Admin User' },
  });
  await prisma.user_roles.upsert({
    where: { user_id_role_id: { user_id: admin.id, role_id: roleMap['SUPER_ADMIN'] } },
    update: {},
    create: { user_id: admin.id, role_id: roleMap['SUPER_ADMIN'] },
  });
  console.log(`✅ Admin: ${admin.email} → SUPER_ADMIN`);

  // 4. Staff users
  for (const staff of STAFF_USERS) {
    const pw = await bcrypt.hash(staff.password, 10);
    const user = await prisma.users.upsert({
      where: { email: staff.email },
      update: { password_hash: pw, full_name: staff.fullName },
      create: { email: staff.email, password_hash: pw, full_name: staff.fullName },
    });
    const roleId = roleMap[staff.role];
    if (roleId) {
      await prisma.user_roles.upsert({
        where: { user_id_role_id: { user_id: user.id, role_id: roleId } },
        update: {},
        create: { user_id: user.id, role_id: roleId },
      });
    }
  }
  console.log(`✅ ${STAFF_USERS.length} staff users seeded`);

  // 5. Categories
  const catMap: Record<string, bigint> = {};
  for (const cat of CATEGORIES) {
    const c = await prisma.categories.create({
      data: { name_nl: cat.nameNl, name_en: cat.nameEn, icon: cat.icon, sort_order: cat.sort_order, created_by: 'seed' }
    });
    catMap[cat.nameNl] = c.id;
  }
  console.log(`✅ ${CATEGORIES.length} categories seeded`);

  // 6. Menu items
  const MENU_ITEMS = [
    { category: 'Voorgerecht', nameNl: 'Burrata met Tomaat', nameEn: 'Burrata with Tomato', descriptionNl: 'Romige burrata met heirloom tomaten en basilicum olie', descriptionEn: 'Creamy burrata with heirloom tomatoes and basil oil', price: 12.50, prep: 10, calories: 320, featured: true },
    { category: 'Voorgerecht', nameNl: 'Gamba\'s al Ajillo', nameEn: 'Garlic Prawns', descriptionNl: 'Gamba\'s gebakken in knoflook-olie met peterselie', descriptionEn: 'Prawns baked in garlic oil with parsley', price: 14.00, prep: 12, calories: 280 },
    { category: 'Soep',        nameNl: 'Tomatensoep', nameEn: 'Tomato Soup', descriptionNl: 'Huisgemaakte tomatensoep met verse basilicum', descriptionEn: 'Homemade tomato soup with fresh basil', price: 7.50, prep: 8, calories: 180 },
    { category: 'Soep',        nameNl: 'Vissoep', nameEn: 'Fish Soup', descriptionNl: 'Rijke vissoep met verse zeevruchten en croutons', descriptionEn: 'Rich fish soup with fresh seafood and croutons', price: 10.50, prep: 10, calories: 240 },
    { category: 'Hoofdgerecht', nameNl: 'Entrecôte 250g', nameEn: 'Ribeye 250g', descriptionNl: 'Dry-aged entrecôte met chimichurri en frieten', descriptionEn: 'Dry-aged ribeye with chimichurri and fries', price: 32.00, prep: 25, calories: 680, featured: true },
    { category: 'Hoofdgerecht', nameNl: 'Lamsrack', nameEn: 'Rack of Lamb', descriptionNl: 'Geroosterd lamsrack met rozemarijn jus en groenten', descriptionEn: 'Roasted rack of lamb with rosemary gravy and vegetables', price: 36.00, prep: 30, calories: 580 },
    { category: 'Hoofdgerecht', nameNl: 'Kippenborst Rôtisserie', nameEn: 'Rotisserie Chicken', descriptionNl: 'Langzaam gegaard kip met truffelaardappelen', descriptionEn: 'Slow-cooked chicken with truffle potatoes', price: 24.00, prep: 20, calories: 520 },
    { category: 'Vis & Zeevruchten', nameNl: 'Zeebaars Filet', nameEn: 'Sea Bass Fillet', descriptionNl: 'Zeebaars op de huid gebakken met citroen beurre blanc', descriptionEn: 'Sea bass baked on the skin with lemon beurre blanc', price: 28.00, prep: 18, calories: 420, featured: true },
    { category: 'Vis & Zeevruchten', nameNl: 'Rivierkreeft', nameEn: 'Crayfish', descriptionNl: 'Verse rivierkreeft met garnalenboter en dille', descriptionEn: 'Fresh crayfish with shrimp butter and dill', price: 34.00, prep: 20, calories: 380 },
    { category: 'Vegetarisch', nameNl: 'Risotto Porcini', nameEn: 'Mushroom Risotto', descriptionNl: 'Romige risotto met porcini paddenstoelen en truffelolie', descriptionEn: 'Creamy risotto with porcini mushrooms and truffle oil', price: 19.50, prep: 22, calories: 460 },
    { category: 'Vegetarisch', nameNl: 'Geroosterde Groenten', nameEn: 'Roasted Vegetables', descriptionNl: 'Seizoensgroenten uit de oven met haloumi en dukkah', descriptionEn: 'Seasonal oven-roasted vegetables with halloumi and dukkah', price: 16.00, prep: 20, calories: 380 },
    { category: 'Dessert', nameNl: 'Crème Brûlée', nameEn: 'Crème Brûlée', descriptionNl: 'Klassieke crème brûlée met vanille en seizoensfruit', descriptionEn: 'Classic crème brûlée with vanilla and seasonal fruit', price: 9.00, prep: 5, calories: 340 },
    { category: 'Dessert', nameNl: 'Chocolade Fondant', nameEn: 'Chocolate Lava Cake', descriptionNl: 'Warme chocolade fondant met vanille-ijs', descriptionEn: 'Warm chocolate lava cake with vanilla ice cream', price: 10.50, prep: 12, calories: 480, featured: true },
    { category: 'Dessert', nameNl: 'Tiramisu', nameEn: 'Tiramisu', descriptionNl: 'Huisgemaakte tiramisu met Amaretto', descriptionEn: 'Homemade tiramisu with Amaretto', price: 9.50, prep: 5, calories: 420 },
    { category: 'Dranken', nameNl: 'Huiswijn Rood (glas)', nameEn: 'House Red Wine (glass)', descriptionNl: 'Selectie van de week, vraag naar het aanbod', descriptionEn: 'Selection of the week, ask for the offer', price: 6.50, prep: 2, calories: 120 },
    { category: 'Dranken', nameNl: 'Huiswijn Wit (glas)', nameEn: 'House White Wine (glass)', descriptionNl: 'Frisse witte wijn van de week', descriptionEn: 'Fresh white wine of the week', price: 6.50, prep: 2, calories: 110 },
    { category: 'Dranken', nameNl: 'Spa Blauw', nameEn: 'Mineral Water', descriptionNl: 'Mineraalwater 33cl', descriptionEn: 'Mineral water 33cl', price: 3.00, prep: 1, calories: 0 },
    { category: 'Dranken', nameNl: 'Koffie', nameEn: 'Coffee', descriptionNl: 'Espresso, Americano of Cappuccino', descriptionEn: 'Espresso, Americano or Cappuccino', price: 3.50, prep: 3, calories: 10 },
  ];

  let created = 0;
  for (const item of MENU_ITEMS) {
    const catId = catMap[item.category];
    if (!catId) continue;
    const existing = await prisma.menu_items.findFirst({ where: { name_nl: item.nameNl, deleted_at: null } });
    if (!existing) {
      await prisma.menu_items.create({
        data: {
          category_id: catId,
          name_nl: item.nameNl,
          name_en: item.nameEn,
          description_nl: item.descriptionNl,
          description_en: item.descriptionEn,
          price: item.price,
          prep_time_minutes: item.prep,
          calories: item.calories ?? null,
          featured: item.featured ?? false,
          available: true,
          created_by: 'seed',
        },
      });
      created++;
    }
  }
  console.log(`✅ ${created} menu items seeded`);

  // 7. Restaurant tables
  const TABLE_CONFIGS = [
    { number: 'T1', capacity: 2 }, { number: 'T2', capacity: 2 },
    { number: 'T3', capacity: 4 }, { number: 'T4', capacity: 4 },
    { number: 'T5', capacity: 4 }, { number: 'T6', capacity: 6 },
    { number: 'T7', capacity: 6 }, { number: 'T8', capacity: 8 },
    { number: 'BAR1', capacity: 1 }, { number: 'BAR2', capacity: 1 },
  ];
  for (const t of TABLE_CONFIGS) {
    await prisma.restaurant_tables.upsert({
      where: { table_number: t.number },
      update: {},
      create: { table_number: t.number, capacity: t.capacity, status: 'AVAILABLE', created_by: 'seed' },
    });
  }
  console.log(`✅ ${TABLE_CONFIGS.length} restaurant tables seeded`);

  // 8. Dummy orders
  const existingOrderCount = await prisma.orders.count();
  await prisma.order_items.deleteMany({});
  await prisma.payments.deleteMany({});
  await prisma.orders.deleteMany({});
  if (true) {
    // Get a few menu items to reference
    const menuItems = await prisma.menu_items.findMany({ take: 10, where: { deleted_at: null } });
    const tables = await prisma.restaurant_tables.findMany({ take: 5 });

    const now = new Date();
    const DUMMY_ORDERS: any[] = [];
    
    // Generate 50 historical PAID orders over the last 7 days
    for (let i = 0; i < 50; i++) {
      const daysAgo = Math.floor(Math.random() * 7); // 0 to 6 days ago
      const hoursAgo = Math.floor(Math.random() * 12) + 10; // 10:00 to 22:00
      const minutesAgo = daysAgo * 24 * 60 + (now.getHours() - hoursAgo) * 60 + Math.floor(Math.random() * 60);
      
      const numItems = Math.floor(Math.random() * 4) + 1;
      const items: any[] = [];
      for (let j = 0; j < numItems; j++) {
        items.push({
          idx: Math.floor(Math.random() * menuItems.length),
          qty: Math.floor(Math.random() * 3) + 1
        });
      }

      DUMMY_ORDERS.push({
        orderNumber: `ORD-HIST-${1000 + i}`,
        type: Math.random() > 0.3 ? 'DINE_IN' : 'TAKEAWAY',
        status: 'PAID', // crucial for analytics
        tableIdx: Math.random() > 0.3 ? Math.floor(Math.random() * tables.length) : null,
        items,
        minutesAgo
      });
    }

    // Add a few active orders for today
    DUMMY_ORDERS.push(
      { orderNumber: 'ORD-LIVE-1', type: 'DINE_IN', status: 'IN_PROGRESS', tableIdx: 0, items: [{ idx: 0, qty: 2 }], minutesAgo: 20 },
      { orderNumber: 'ORD-LIVE-2', type: 'DINE_IN', status: 'PENDING', tableIdx: 1, items: [{ idx: 1, qty: 1 }], minutesAgo: 5 },
      { orderNumber: 'ORD-LIVE-3', type: 'TAKEAWAY', status: 'READY', tableIdx: null, items: [{ idx: 2, qty: 3 }], minutesAgo: 30 }
    );

    for (const o of DUMMY_ORDERS) {
      const validItems = o.items
        .map(i => ({ ...i, menu: menuItems[i.idx % menuItems.length] }))
        .filter(i => i.menu);

      let subtotal = 0;
      const orderItemsData = validItems.map(i => {
        const price = Number(i.menu.price);
        subtotal += price * i.qty;
        return { menu_item_id: i.menu.id, quantity: i.qty, unit_price: i.menu.price, status: 'PENDING' };
      });

      const tax = subtotal * 0.09;
      const total = subtotal + tax;

      const orderTime = new Date(now.getTime() - o.minutesAgo * 60000);

      await prisma.orders.create({
        data: {
          order_number: o.orderNumber,
          type: o.type,
          status: o.status,
          subtotal,
          tax,
          total,
          table_id: o.tableIdx !== null && tables[o.tableIdx] ? tables[o.tableIdx].id : null,
          idempotency_key: `seed-${o.orderNumber}`,
          created_by: 'seed',
          created_at: orderTime,
          updated_at: orderTime,
          order_items: { create: orderItemsData },
        },
      });
    }
    console.log(`✅ ${DUMMY_ORDERS.length} dummy orders seeded`);
  } else {
    console.log(`⏭️  Orders already exist (${existingOrderCount}), skipping`);
  }

  console.log('🎉 All seeding complete!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
