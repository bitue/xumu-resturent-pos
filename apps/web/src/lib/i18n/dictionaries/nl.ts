export const nl = {
  nav: {
    menu: 'Menu',
    reserve: 'Reserveren',
    book_table: 'Boek een tafel'
  },
  home: {
    hero_title: 'Welkom bij Xuma',
    hero_subtitle: 'Ervaar een culinaire ontdekkingsreis in het hart van Zeeland. Ambachtelijke bereidingen met lokale seizoensgebonden producten.',
    reserve_btn: 'Reserveren',
    menu_btn: 'Bekijk het Menu'
  },
  footer: {
    rights: 'Alle rechten voorbehouden.',
    staff_login: 'Medewerker Login'
  },
  common: {
    save: "Opslaan",
    cancel: "Annuleren",
    edit: "Bewerken",
    delete: "Verwijderen",
    actions: "Acties",
    loading: "Laden...",
    all: "Alle"
  },
  menu: {
    title: "Ons Menu",
    subtitle: "Menu wordt momenteel samengesteld door onze chef...",
    loading: "Menu laden...",
    available: "Beschikbaar",
    unavailable: "Niet beschikbaar"
  },
  reserve: {
    title: "Reserveren",
    subtitle: "Online reserveren is binnenkort beschikbaar. Bel ons gerust voor een tafel.",
    phone_cta: "Bel ons",
    phone: "+31 (0)113 123 456"
  },
  error: {
    not_found: "Pagina niet gevonden",
    generic: "Er is een fout opgetreden"
  },
  auth: {
    login: {
      title: "Xuma",
      subtitle: "Inloggen voor medewerkers",
      emailLabel: "E-mail",
      emailPlaceholder: "naam@xuma.nl",
      passwordLabel: "Wachtwoord",
      submitButton: "Inloggen",
      errors: {
        emailInvalid: "Vul een geldig e-mailadres in",
        passwordRequired: "Wachtwoord is verplicht",
        loginFailed: "Login mislukt. Controleer uw gegevens."
      }
    }
  },
  admin: {
    sidebar: {
      dashboard: "Dashboard",
      menu: "Menu Beheer",
      staff: "Personeel",
      reports: "Rapportages",
      reservations: "Reserveringen",
      orders: "Bestellingen",
      roles: "Toegangsconfiguratie",
      logout: "Uitloggen"
    },
    roles: {
      title: "Rolbeheer",
      description: "Beheer permissies voor verschillende rollen",
      role: "Rol",
      permissions: "Permissies",
      updateFailed: "Fout bij bijwerken permissies",
      newRoleName: "Nieuwe Rol Naam",
      descriptionField: "Beschrijving",
      createRole: "Rol Maken",
      creating: "Maken..."
    },
    dashboard: {
      title: "Dashboard",
      last7days: "Laatste 7 Dagen",
      revenue: "Omzet",
      ordersCount: "Bestellingen",
      avgSpend: "Gemiddelde Besteding",
      topItem: "Top Gerecht",
      timesOrdered: "x besteld",
      revenueChartTitle: "Omzet (Laatste 7 dagen)",
      liveKitchen: "Live Keuken",
      live: "Live",
      activeTickets: "Actieve Bonnen",
      openKds: "Open KDS Scherm"
    },
    menu_manage: {
      title: "Menu Beheer",
      description: "Beheer de gerechten en categorieën van uw restaurant.",
      searchPlaceholder: "Zoek gerecht...",
      addCategory: "Nieuwe Categorie",
      addDish: "Nieuw Gerecht",
      price: "Prijs",
      available: "Beschikbaar",
      unavailable: "Niet beschikbaar",
      noDishesFound: "Geen gerechten gevonden",
      edit: "Bewerken",
      save: "Opslaan",
      cancel: "Annuleren",
      delete: "Verwijderen",
      name: "Naam",
      descriptionField: "Beschrijving"
    },
    staff: {
      title: "Personeelsbeheer",
      description: "Beheer uw personeel en hun rollen binnen het systeem.",
      addStaff: "Nieuwe Medewerker",
      name: "Naam",
      email: "E-mail",
      roles: "Rollen",
      actions: "Acties",
      mustHaveRole: "Gebruiker moet minstens één rol hebben",
      updateFailed: "Fout bij bijwerken rol"
    },
    orders: {
      title: "Bestellingen Beheer",
      description: "Overzicht van alle bestellingen.",
      orderNumber: "Bestelling",
      type: "Type",
      status: "Status",
      total: "Totaal",
      time: "Tijd",
      actions: "Acties",
      nextStep: "Volgende stap",
      noOrdersFound: "Geen bestellingen gevonden"
    },
    kds: {
      incoming: "INCOMING",
      cooking: "COOKING",
      ready: "READY",
      table: "Tafel",
      start: "Start →",
      ready_btn: "Klaar →",
      served: "Geserveerd ✓",
      note: "notitie"
    },
    reports_analytics: {
      title: "360° Analytics",
      subtitle: "Overzicht van de afgelopen 30 dagen",
      totalRevenue: "Totale Omzet (30d)",
      totalOrders: "Totaal Bestellingen (30d)",
      returningCustomers: "Terugkerende Klanten",
      salesTrend: "Omzet Trend (Laatste 30 dagen)",
      salesDistribution: "Verkoopverdeling per Categorie",
      dailySales: "Dagelijkse Omzet",
      revenue: "Omzet",
      orderCount: "Aantal Bestellingen",
      topItems: "Top Gerechten",
      quantitySold: "Aantal Verkocht",
      customerAnalytics: "Klant Analyse",
      newCustomers: "Nieuwe Klanten",
      returningCustomersCount: "Terugkerende Klanten",
      customerLtv: "Klant Lifetime Value (LTV)",
      customerType: "Type Klant",
      customer: "Klant",
      ltv: "LTV",
      orders: "Bestellingen",
      new: "Nieuw",
      returning: "Terugkerend"
    },
    reservations_table: {
      title: "Reserveringen Beheer",
      description: "Overzicht van alle reserveringen",
      customerName: "Klant",
      phone: "Telefoon",
      table: "Tafel",
      date: "Datum",
      time: "Tijd",
      partySize: "Personen",
      status: "Status",
      actions: "Acties",
      updateStatus: "Status bijwerken",
      specialRequests: "Speciale Verzoeken",
      statusLabels: {
        pending: "IN AFWACHTING",
        confirmed: "BEVESTIGD",
        seated: "GEPLAATST",
        cancelled: "GEANNULEERD",
        no_show: "NO-SHOW"
      }
    },
    pos: {
      newOrder: "Nieuwe Bestelling",
      pay: "Afrekenen",
      total: "Totaal",
      clear: "Leegmaken",
      remove: "Verwijderen",
      addNote: "Notitie toevoegen",
      menuCategories: "Menu Categorieën",
      search: "Zoeken...",
      order: "Bestelling",
      chooseTable: "Kies Tafel",
      emptyCart: "Geen items in bestelling",
      subtotal: "Subtotaal",
      tax: "BTW (9%)",
      hold: "In de Wacht",
      placeOrder: "Bestelling Plaatsen"
    }
  }
};
