export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  portions?: string;
  seasonings?: string[];
  allergens?: string[];
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
  priority: number;
}

export const SEASONINGS = ['Plain', 'Lemon Pepper', 'Cajun', 'Garlic'];

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'house-favorites',
    name: 'House Favorites',
    description: 'Our most popular dishes that keep customers coming back',
    priority: 1,
    items: [
      {
        id: 'sharks-special-combo',
        name: 'Sharks Special Combo',
        description: 'Delicious crispy fish and chicken combo with fries and coleslaw',
        price: 14.99,
        category: 'house-favorites',
        portions: '2 pieces fish, 2 pieces chicken',
        seasonings: SEASONINGS,
        popular: true
      },
      {
        id: 'golden-wings-platter',
        name: 'Golden Wings Platter',
        description: 'Expertly fried golden wings with your choice of seasoning',
        price: 12.99,
        category: 'house-favorites',
        portions: '8 wings',
        seasonings: SEASONINGS,
        popular: true
      },
      {
        id: 'catfish-dinner',
        name: 'Catfish Dinner Special',
        description: 'Fresh catfish fillet, crispy and golden, served with sides',
        price: 11.99,
        category: 'house-favorites',
        portions: '2 fillets',
        seasonings: SEASONINGS
      }
    ]
  },
  {
    id: 'wings',
    name: 'Wings Wings Wings',
    description: 'Our signature wing collection with various seasonings',
    priority: 2,
    items: [
      {
        id: 'traditional-wings',
        name: 'Traditional Wings',
        description: 'Crispy, juicy wings cooked to perfection',
        price: 8.99,
        category: 'wings',
        portions: '6 wings',
        seasonings: SEASONINGS
      },
      {
        id: 'jumbo-wings',
        name: 'Jumbo Wings',
        description: 'Extra large wings for the big appetite',
        price: 12.99,
        category: 'wings',
        portions: '6 jumbo wings',
        seasonings: SEASONINGS
      },
      {
        id: 'wing-combo',
        name: 'Wing Combo',
        description: 'Wings with fries and drink',
        price: 10.99,
        category: 'wings',
        portions: '6 wings',
        seasonings: SEASONINGS
      }
    ]
  },
  {
    id: 'fish-dinners',
    name: 'Fish Dinners',
    description: 'Fresh fish prepared with our secret seasoning',
    priority: 3,
    items: [
      {
        id: 'catfish-dinner',
        name: 'Catfish Dinner',
        description: 'Golden fried catfish with fries and coleslaw',
        price: 11.99,
        category: 'fish-dinners',
        portions: '2 fillets',
        seasonings: SEASONINGS
      },
      {
        id: 'ocean-perch-dinner',
        name: 'Ocean Perch Dinner',
        description: 'Crispy ocean perch with your choice of sides',
        price: 10.99,
        category: 'fish-dinners',
        portions: '2 fillets',
        seasonings: SEASONINGS
      },
      {
        id: 'tilapia-dinner',
        name: 'Tilapia Dinner',
        description: 'Fresh tilapia, expertly seasoned and fried',
        price: 12.99,
        category: 'fish-dinners',
        portions: '2 fillets',
        seasonings: SEASONINGS
      },
      {
        id: 'jack-salmon-dinner',
        name: 'Jack Salmon Dinner',
        description: 'Premium jack salmon with sides',
        price: 13.99,
        category: 'fish-dinners',
        portions: '2 fillets',
        seasonings: SEASONINGS
      }
    ]
  },
  {
    id: 'chicken-dinners',
    name: 'Chicken Dinners',
    description: 'Perfectly seasoned chicken prepared fresh daily',
    priority: 4,
    items: [
      {
        id: 'chicken-wings-dinner',
        name: 'Chicken Wings Dinner',
        description: 'Crispy chicken wings with fries and coleslaw',
        price: 9.99,
        category: 'chicken-dinners',
        portions: '6 wings',
        seasonings: SEASONINGS
      },
      {
        id: 'chicken-tenders-dinner',
        name: 'Chicken Tenders Dinner',
        description: 'Golden chicken tenders with dipping sauce',
        price: 10.99,
        category: 'chicken-dinners',
        portions: '4 tenders',
        seasonings: SEASONINGS
      },
      {
        id: 'mixed-chicken-dinner',
        name: 'Mixed Chicken Dinner',
        description: 'Mix of chicken pieces with sides',
        price: 11.99,
        category: 'chicken-dinners',
        portions: '3 pieces mixed',
        seasonings: SEASONINGS
      }
    ]
  },
  {
    id: 'shrimp-dinners',
    name: 'Shrimp Dinners',
    description: 'Fresh shrimp prepared to perfection',
    priority: 5,
    items: [
      {
        id: 'medium-shrimp-dinner',
        name: 'Medium Shrimp Dinner',
        description: 'Crispy medium shrimp with cocktail sauce',
        price: 12.99,
        category: 'shrimp-dinners',
        portions: '10 pieces',
        seasonings: SEASONINGS
      },
      {
        id: 'jumbo-shrimp-dinner',
        name: 'Jumbo Shrimp Dinner',
        description: 'Large jumbo shrimp, perfectly seasoned',
        price: 15.99,
        category: 'shrimp-dinners',
        portions: '8 jumbo pieces',
        seasonings: SEASONINGS
      }
    ]
  },
  {
    id: 'combo-dinners',
    name: 'Combo Dinners',
    description: 'Best of both worlds - mix and match your favorites',
    priority: 6,
    items: [
      {
        id: 'two-item-combo',
        name: '2-Item Combo',
        description: 'Choose any two items from our menu',
        price: 13.99,
        category: 'combo-dinners',
        portions: '2 items of choice'
      },
      {
        id: 'three-item-combo',
        name: '3-Item Combo',
        description: 'Choose any three items from our menu',
        price: 16.99,
        category: 'combo-dinners',
        portions: '3 items of choice'
      }
    ]
  },
  {
    id: 'family-meals',
    name: 'Family Meals',
    description: 'Perfect for sharing with family and friends',
    priority: 7,
    items: [
      {
        id: 'family-chicken-30pc',
        name: '30-Piece Chicken Family Pack',
        description: 'Perfect for large gatherings',
        price: 45.99,
        category: 'family-meals',
        portions: '30 pieces mixed chicken'
      },
      {
        id: 'family-fish-20pc',
        name: '20-Piece Fish Family Pack',
        description: 'Fresh fish for the whole family',
        price: 39.99,
        category: 'family-meals',
        portions: '20 pieces mixed fish'
      },
      {
        id: 'mega-family-combo',
        name: 'Mega Family Combo',
        description: 'Fish, chicken, and sides for large groups',
        price: 79.99,
        category: 'family-meals',
        portions: '50+ pieces mixed'
      }
    ]
  },
  {
    id: 'party-wings',
    name: 'Party Wings',
    description: 'Large quantities perfect for parties and events',
    priority: 8,
    items: [
      {
        id: 'party-wings-50',
        name: '50-Piece Party Wings',
        description: 'Perfect for medium parties',
        price: 49.99,
        category: 'party-wings',
        portions: '50 wings',
        seasonings: SEASONINGS
      },
      {
        id: 'party-wings-100',
        name: '100-Piece Party Wings',
        description: 'Ultimate party wing package',
        price: 89.99,
        category: 'party-wings',
        portions: '100 wings',
        seasonings: SEASONINGS
      }
    ]
  },
  {
    id: 'kids-meals',
    name: 'Kids Meals',
    description: 'Child-friendly portions and options',
    priority: 9,
    items: [
      {
        id: 'kids-chicken-nuggets',
        name: 'Kids Chicken Nuggets',
        description: 'Golden nuggets with fries and juice',
        price: 7.99,
        category: 'kids-meals',
        portions: '6 nuggets'
      },
      {
        id: 'kids-fish-strips',
        name: 'Kids Fish Strips',
        description: 'Crispy fish strips with fries',
        price: 7.99,
        category: 'kids-meals',
        portions: '3 strips'
      }
    ]
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches & Burgers',
    description: 'Handheld options for on-the-go dining',
    priority: 10,
    items: [
      {
        id: 'fish-sandwich',
        name: 'Fish Sandwich',
        description: 'Crispy fish fillet with lettuce and mayo',
        price: 8.99,
        category: 'sandwiches'
      },
      {
        id: 'chicken-sandwich',
        name: 'Chicken Sandwich',
        description: 'Juicy chicken breast with pickles',
        price: 8.99,
        category: 'sandwiches'
      },
      {
        id: 'shrimp-po-boy',
        name: 'Shrimp Po-Boy',
        description: 'New Orleans style shrimp sandwich',
        price: 10.99,
        category: 'sandwiches'
      }
    ]
  },
  {
    id: 'sides',
    name: 'Salads & Sides',
    description: 'Perfect accompaniments to complete your meal',
    priority: 11,
    items: [
      {
        id: 'seasoned-fries',
        name: 'Seasoned Fries',
        description: 'Golden fries with our special seasoning',
        price: 3.99,
        category: 'sides'
      },
      {
        id: 'fried-okra',
        name: 'Fried Okra',
        description: 'Crispy Southern-style okra',
        price: 4.99,
        category: 'sides'
      },
      {
        id: 'cornmeal-balls',
        name: 'Cornmeal Balls',
        description: 'House-made cornmeal balls',
        price: 4.49,
        category: 'sides'
      },
      {
        id: 'coleslaw',
        name: 'Coleslaw',
        description: 'Fresh, creamy coleslaw',
        price: 2.99,
        category: 'sides'
      },
      {
        id: 'garden-salad',
        name: 'Garden Salad',
        description: 'Fresh mixed greens with vegetables',
        price: 6.99,
        category: 'sides'
      }
    ]
  },
  {
    id: 'beverages',
    name: 'Desserts & Beverages',
    description: 'Sweet treats and refreshing drinks',
    priority: 12,
    items: [
      {
        id: 'soda-12oz',
        name: '12oz Soft Drink',
        description: 'Coca-Cola products',
        price: 1.99,
        category: 'beverages'
      },
      {
        id: 'soda-20oz',
        name: '20oz Soft Drink',
        description: 'Coca-Cola products',
        price: 2.49,
        category: 'beverages'
      },
      {
        id: 'sweet-tea',
        name: 'Sweet Tea',
        description: 'Fresh-brewed Southern sweet tea',
        price: 2.29,
        category: 'beverages'
      },
      {
        id: 'peach-cobbler',
        name: 'Peach Cobbler',
        description: 'House-made peach cobbler',
        price: 4.99,
        category: 'beverages'
      }
    ]
  }
];

export const LOCATIONS = [
  {
    id: 'merrilville',
    name: 'Merrilville',
    address: 'Merrilville, IN',
    phone: '(219) 555-0001',
    hours: {
      'Sunday-Thursday': '10:00 AM - 12:00 AM',
      'Friday-Saturday': '10:00 AM - 2:00 AM'
    },
    orderUrl: 'merrilville.ordersharksfishandchicken.com',
    deliveryRadius: 5
  },
  {
    id: 'lancing',
    name: 'Lancing',
    address: 'Torrence Avenue, Lancing, IL',
    phone: '(708) 555-0002',
    hours: {
      'Sunday-Thursday': '10:00 AM - 12:00 AM',
      'Friday-Saturday': '10:00 AM - 2:00 AM'
    },
    orderUrl: 'lancing.ordersharksfishandchicken.com',
    deliveryRadius: 5
  },
  {
    id: 'sauk-village',
    name: 'Sauk Village',
    address: 'Sauk Trail, Sauk Village, IL',
    phone: '(708) 555-0003',
    hours: {
      'Sunday-Thursday': '10:00 AM - 12:00 AM',
      'Friday-Saturday': '10:00 AM - 2:00 AM'
    },
    orderUrl: 'saukvillage.ordersharksfishandchicken.com',
    deliveryRadius: 5
  }
];

export function getMenuByCategory(categoryId: string): MenuCategory | undefined {
  return MENU_DATA.find(category => category.id === categoryId);
}

export function getMenuItem(itemId: string): MenuItem | undefined {
  for (const category of MENU_DATA) {
    const item = category.items.find(item => item.id === itemId);
    if (item) return item;
  }
  return undefined;
}

export function getPopularItems(): MenuItem[] {
  return MENU_DATA
    .flatMap(category => category.items)
    .filter(item => item.popular)
    .slice(0, 6);
}