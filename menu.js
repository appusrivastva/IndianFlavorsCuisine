// menu.js

// Sample data from your JSON
const menuData = {
  "appetizers": [
    { "item": "Vegetable Pakora", "description": "Vegetables coated with garbanzo bean batter, mild spices and fried.", "price": "$5.99" },
    { "item": "Chicken Pakora", "description": "Pieces of chicken, coated with garbanzo bean batter, mild spices and fried.", "price": "$9.99" },
    { "item": "Paneer Pakora", "description": "Pieces of paneer, coated with garbanzo bean batter, mild spices and fried.", "price": "$8.99" },
    { "item": "Vegetable Samosa", "description": "Crispy pastry stuffed with spiced potatoes and peas.", "price": "$4.99" },
    { "item": "Meat Samosa", "description": "Crispy pastry stuffed with ground lamb, potatoes, and peas.", "price": "$5.99" }
  ],
  "Indian Barbeque": [
    { "item": "Tandoori Chicken", "description": "Chicken marinated in yogurt and spices, cooked in the tandoor.", "price_full_plate": "$21.99", "price_half_plate": "$11.99" },
    { "item": "Chicken Seekh Kebab", "description": "Minced Chicken mixed with onions and spices, broiled in the tandoor.", "price": "$15.99" },
    { "item": "Chicken Tikka", "description": "Boneless chicken breast marinated with yogurt and spices, cooked in the tandoor.", "price": "$15.99" },
    { "item": "Lamb Tikka", "description": "Tender cubes of lamb marinated in yogurt and spices, cooked in the tandoor.", "price": "$18.99" }
  ],
  "Vegetarian Main Course": [
    { "item": "Paneer Makhani", "description": "Indian homemade cheese cooked with mild spices, cream, and tomato sauce.", "price": "$15.99" },
    { "item": "Dal Makhani", "description": "Lentils cooked with spices.", "price": "$13.99" },
    { "item": "Chana Masala", "description": "Chickpeas cooked with onions, tomatoes, and spices.", "price": "$12.99" },
    { "item": "Aloo Gobhi", "description": "Cauliflower and potatoes cooked with herbs and spices.", "price": "$12.99" }
  ],
  "Indian Breads": [
    { "item": "Plain Naan", "description": "Made from refined wheat, tandoor baked.", "price": "$2.25" },
    { "item": "Garlic Naan", "description": "Naan with garlic, tandoor baked.", "price": "$3.25" },
    { "item": "Onion Kulcha", "description": "Naan stuffed with onions, baked in the tandoor.", "price": "$3.50" },
    { "item": "Paneer Kulcha", "description": "Naan stuffed with paneer, baked in the tandoor.", "price": "$3.99" }
  ],
  "Desserts": [
    { "item": "Gulab Jamun", "description": "Deep fried balls made of flour and milk powder soaked in sugar syrup.", "price": "$3.99" },
    { "item": "Carrot Halwa", "description": "Sweet Carrot Pudding.", "price": "$3.99" },
    { "item": "Kheer", "description": "Traditional Indian rice pudding flavored with cardamom and garnished with nuts.", "price": "$3.99" }
  ],
  "Beverages": [
    { "item": "Masala Chai", "description": "Indian tea with milk, cardamom, and fresh ginger.", "price": "$2.99" },
    { "item": "Mango Lassi", "description": "Yogurt and mango drink.", "price": "$3.99" },
    { "item": "Sweet Lassi", "description": "Yogurt drink, sweetened.", "price": "$3.50" },
    { "item": "Salted Lassi", "description": "Yogurt drink, salted.", "price": "$3.50" }
  ]
};

// Function to create menu items
function createMenuItem(category, item) {
  let priceText = '';
  if (item.price_full_plate && item.price_half_plate) {
    priceText = `<p class="text-gray-600">Full Plate: ${item.price_full_plate}<br>Half Plate: ${item.price_half_plate}</p>`;
  } else {
    priceText = `<p class="text-gray-600">${item.price}</p>`;
  }
  
  return `
    <div class="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 class="text-xl font-semibold text-gray-800">${item.item}</h3>
      <p class="text-gray-600">${item.description}</p>
      ${priceText}
      <button class="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Add to Cart</button>
    </div>
  `;
}

// Function to populate menu
function populateMenu() {
  const menuContainer = document.getElementById('menu-container');
  
  Object.keys(menuData).forEach(category => {
    const section = document.createElement('section');
    section.innerHTML = `<h2 class="text-2xl font-bold text-gray-800 mt-8">${category}</h2>`;
    menuData[category].forEach(item => {
      section.innerHTML += createMenuItem(category, item);
    });
    menuContainer.appendChild(section);
  });
}

// Load menu on page load
window.onload = populateMenu;