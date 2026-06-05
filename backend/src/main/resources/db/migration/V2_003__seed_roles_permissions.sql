-- Insert standard roles
INSERT INTO roles (name, description) VALUES
('SUPER_ADMIN', 'Full system access'),
('ADMIN', 'Restaurant manager'),
('MANAGER', 'Shift manager'),
('CASHIER', 'Front desk / checkout'),
('WAITER', 'Table service'),
('KITCHEN_STAFF', 'Kitchen operations'),
('CUSTOMER', 'Public application user')
ON CONFLICT (name) DO NOTHING;

-- Insert standard permissions
INSERT INTO permissions (name, description) VALUES
('system:config', 'Configure system settings'),
('users:read', 'Read users'),
('users:write', 'Create and update users'),
('menu:read', 'Read menu catalog'),
('menu:write', 'Modify menu catalog'),
('order:create', 'Create new orders'),
('order:read', 'View orders'),
('order:update_status', 'Update order statuses'),
('payment:process', 'Process payments')
ON CONFLICT (name) DO NOTHING;

-- Seed SUPER_ADMIN permissions (All permissions)
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r, permissions p
WHERE r.name = 'SUPER_ADMIN'
ON CONFLICT DO NOTHING;

-- Seed ADMIN permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r, permissions p
WHERE r.name = 'ADMIN' AND p.name IN ('users:read', 'menu:read', 'menu:write', 'order:create', 'order:read', 'order:update_status', 'payment:process')
ON CONFLICT DO NOTHING;

-- Seed CASHIER permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r, permissions p
WHERE r.name = 'CASHIER' AND p.name IN ('menu:read', 'order:create', 'order:read', 'payment:process')
ON CONFLICT DO NOTHING;

-- Seed WAITER permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r, permissions p
WHERE r.name = 'WAITER' AND p.name IN ('menu:read', 'order:create', 'order:read')
ON CONFLICT DO NOTHING;

-- Seed KITCHEN_STAFF permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r, permissions p
WHERE r.name = 'KITCHEN_STAFF' AND p.name IN ('menu:read', 'order:read', 'order:update_status')
ON CONFLICT DO NOTHING;
