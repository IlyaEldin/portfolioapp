export const PRODUCTS = [
  {
    id: 1,
    name: "Бананы",
    price: 165,
    units: "кг",
    image: "/images/bananas.webp",
    category: "Фрукты",
    inStock: true,
    rating: 4.5,
    discount: 10
  },
  {
    id: 2,
    name: "Яблоки",
    price: 89,
    units: "кг",
    image: "/images/apples.jpg",
    category: "Фрукты",
    inStock: true,
    rating: 4.2,
    discount: 0
  },
  {
    id: 3,
    name: "Апельсины",
    price: 120,
    units: "кг",
    image: "/images/oranges.jpg",
    category: "Фрукты",
    inStock: true,
    rating: 4.7,
    discount: 5
  },
  {
    id: 4,
    name: "Виноград",
    price: 210,
    units: "кг",
    image: "/images/grapes.jpg",
    category: "Фрукты",
    inStock: false,
    rating: 4.8,
    discount: 0
  },
  {
    id: 5,
    name: "Клубника",
    price: 340,
    units: "кг",
    image: "/images/strawberries.webp",
    category: "Ягоды",
    inStock: true,
    rating: 4.9,
    discount: 15
  },
  {
    id: 6,
    name: "Морковь",
    price: 45,
    units: "кг",
    image: "/images/carrots.webp",
    category: "Овощи",
    inStock: true,
    rating: 4.1,
    discount: 0
  },
  {
    id: 7,
    name: "Огурцы",
    price: 95,
    units: "кг",
    image: "/images/cucumbers.jpg",
    category: "Овощи",
    inStock: true,
    rating: 4.3,
    discount: 0
  },
  {
    id: 8,
    name: "Помидоры",
    price: 130,
    units: "кг",
    image: "/images/tomatoes.webp",
    category: "Овощи",
    inStock: true,
    rating: 4.6,
    discount: 8
  },
  {
    id: 9,
    name: "Шпинат",
    price: 75,
    units: "пучок",
    image: "/images/spinach.jpg",
    category: "Зелень",
    inStock: true,
    rating: 4.4,
    discount: 0
  },
  {
    id: 10,
    name: "Арбуз",
    price: 25,
    units: "кг",
    image: "/images/watermelon.webp",
    category: "Фрукты",
    inStock: true,
    rating: 4.7,
    discount: 20
  },
  {
    id: 11,
    name: "Авокадо",
    price: 190,
    units: "шт",
    image: "/images/avocado.webp",
    category: "Фрукты",
    inStock: true,
    rating: 4.5,
    discount: 12
  },
  {
    id: 12,
    name: "Лимоны",
    price: 110,
    units: "кг",
    image: "/images/lemons.jpg",
    category: "Фрукты",
    inStock: false,
    rating: 4.2,
    discount: 0
  },
  {
    id: 13,
    name: "Картофель",
    price: 35,
    units: "кг",
    image: "/images/potatoes.webp",
    category: "Овощи",
    inStock: true,
    rating: 4.0,
    discount: 0
  },
  {
    id: 14,
    name: "Брокколи",
    price: 150,
    units: "кг",
    image: "/images/broccoli.jpg",
    category: "Овощи",
    inStock: true,
    rating: 4.3,
    discount: 5
  },
  {
    id: 15,
    name: "Груши",
    price: 95,
    units: "кг",
    image: "/images/pears.jpg",
    category: "Фрукты",
    inStock: true,
    rating: 4.4,
    discount: 0
  }
];

export const TOPPRODUCTS = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 8);