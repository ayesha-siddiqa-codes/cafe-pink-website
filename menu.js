/* Cafe Pink menu: data + display code
   Each item is: [ "Dish name", price, "optional description" ] */

const MENU = [
  {
    id: "starters",
    label: "Starters",
    sections: [
      {
        title: "Soups",
        items: [
          ["Pink Haus Tomato Basil Soup", 399],
          ["Truffle Cream of Mushroom", 425],
          ["Himalayan Veg Thukpa", 399],
          ["Himalayan Chicken Thukpa", 425],
          ["Himalayan Prawn Thukpa", 499],
          ["Wok Veg Manchow Soup", 375],
          ["Wok Chicken Manchow Soup", 425],
          ["Garden Veg Clear Soup", 349],
          ["Chicken Clear Broth", 399],
          ["Veg Hot & Sour Soup", 375],
          ["Chicken Hot & Sour Soup", 425]
        ]
      },
      {
        title: "Salads",
        items: [
          ["Green Garden Salad", 359],
          ["Classic Caesar Salad", 359],
          ["Avocado Quinoa Salad", 399],
          ["Greek Garden Salad", 399],
          ["Watermelon Feta Salad", 415],
          ["Chicken Caesar Salad", 399],
          ["Greek Chicken Salad", 499]
        ]
      },
      {
        title: "Small Bites (Veg)",
        items: [
          ["Truffle House Fries / Masala Fries", 359],
          ["Golden Potato Wedges", 359],
          ["Ultimate Loaded Nachos", 375],
          ["Fresh Guacamole & Corn Tortillas", 425],
          ["Herb Butter Garlic Bread", 375],
          ["Veg Quesadilla", 475],
          ["Crispy Chilli Garlic Potato", 375],
          ["Golden Crispy Corn", 399],
          ["Wok Tossed Salt & Pepper Vegetables", 399],
          ["Indo-Chinese Chilli Paneer", 475],
          ["Wok Tossed Chilli Mushrooms", 499]
        ]
      },
      {
        title: "Small Bites (Non-Veg)",
        items: [
          ["Louisiana Cajun Fried Chicken", 445],
          ["Crispy Chicken Bites", 445],
          ["Crispy Fish Goujons", 575],
          ["Ultimate Chicken Loaded Nachos", 425],
          ["Cheesy Chicken Garlic Bread", 425],
          ["Three Cheese Chicken Quesadilla", 575],
          ["Wok Tossed Salt & Pepper Chicken", 449],
          ["Dragon Chicken Lollipop", 475],
          ["House Special Drums of Heaven", 499],
          ["Wok Tossed Salt & Pepper Prawns", 575],
          ["Classic Chilli Chicken", 499]
        ]
      }
    ]
  },

  {
    id: "tandoor",
    label: "Tandoor",
    sections: [
      {
        title: "From the Tandoor",
        items: [
          ["Royal Paneer Tikka", 599],
          ["Malai-E-Khaas Paneer Tikka", 625],
          ["Stuffed Tandoori Mushrooms", 575],
          ["Afghani Cream Chaap", 545],
          ["Achari Spice Chaap", 525],
          ["Signature Dahi Ke Sholey", 575],
          ["Royal Dahi Kebab", 525],
          ["Chargrilled Chicken Tikka", 599],
          ["Malai Murgh Supreme", 625],
          ["Royal Tangri Kebab", 645],
          ["Lucknowi Chicken Sheekh", 599],
          ["Nawabi Mutton Sheekh", 775],
          ["Jumbo Tandoori Prawns", 799],
          ["Chargrilled Fish Tikka", 825]
        ]
      },
      {
        title: "Platters",
        items: [
          ["Royal Veg Platter", 1325],
          ["Royal Non-Veg Platter", 1475],
          ["Mediterranean Cold Mezze Platter", 1245]
        ]
      }
    ]
  },

  {
    id: "indian",
    label: "Indian Mains",
    sections: [
      {
        title: "Indian Curry",
        items: [
          ["Dhaba Style Yellow Dal Tadka", 525],
          ["Amritsari Chana Masala", 545],
          ["Slow Cooked Dal Makhani", 595],
          ["Garden Fresh Mixed Vegetables", 625],
          ["Do Pyaza (Paneer / Mushroom)", 645],
          ["Signature Paneer Butter Masala", 645],
          ["Royal Paneer Lababdar", 645],
          ["Creamy Soya Chaap Masala", 595],
          ["Kadai Paneer Supreme", 655],
          ["Delhi Style Butter Chicken", 699],
          ["Chicken Do Pyaza Special", 675],
          ["Old Delhi Chicken Changezi", 675],
          ["Kadai Chicken Supreme", 699],
          ["Kashmiri Rogan Josh", 745],
          ["Slow Bhuna Mutton", 745],
          ["Nawabi Mutton Rara", 725]
        ]
      },
      {
        title: "Dum Biryani",
        items: [
          ["Veg Biryani", 599],
          ["Chicken Biryani", 625],
          ["Mutton Biryani", 799]
        ]
      },
      {
        title: "Indian Bread & Rice",
        items: [
          ["Tandoori Roti / Butter Roti / Missi Roti", "69 / 79 / 99"],
          ["Naan / Butter Naan / Garlic Naan", "105 / 125 / 125"],
          ["Naan Aloo Pyaaz / Mix", "175 / 199"],
          ["Lachha Paratha / Mirch / Pudina", "105 / 125 / 125"],
          ["Steam Rice", 275],
          ["Jeera Rice", 349],
          ["Matar Paneer Rice", 399]
        ]
      },
      {
        title: "Raita",
        items: [
          ["Boondi Raita", 275],
          ["Pineapple Raita", 299],
          ["Mix Veg Raita", 325]
        ]
      }
    ]
  },

  {
    id: "pizza",
    label: "Pizza & Pasta",
    sections: [
      {
        title: "Pizzeria",
        items: [
          ["Margherita", 645],
          ["Veg Farmhouse", 745],
          ["Corn & Mushroom", 725],
          ["Paneer Tikka", 755],
          ["Chicken Tikka", 775],
          ["Chicken Peri Peri", 755],
          ["Chicken Farmhouse", 799],
          ["Lamb Pepperoni", 825]
        ]
      },
      {
        title: "Italian Pasta",
        items: [
          ["Alfredo", 645],
          ["Arrabbiata", 625],
          ["Aglio e Olio", 649],
          ["Pesto", 675],
          ["Mix Sauce", 675]
        ]
      },
      {
        title: "Add Ons",
        items: [
          ["Chicken", 199],
          ["Prawns", 149]
        ]
      }
    ]
  },

  {
    id: "light",
    label: "Sandwiches & Wraps",
    sections: [
      {
        title: "Sandwiches & Burgers",
        items: [
          ["Mexican Veg Sandwich", 445],
          ["Crispy Paneer Sandwich", 475],
          ["Mushroom Sandwich", 499],
          ["Mexican Chicken Sandwich", 525],
          ["Pulled Chicken Sandwich", 545],
          ["Crispy Chicken Sandwich", 575],
          ["Crunchy Veg Burger", 445],
          ["Paneer Burger", 475],
          ["Chicken Burger", 499]
        ]
      },
      {
        title: "Wraps & Pita",
        items: [
          ["Mexican Veg Wrap", 425],
          ["Smoky Paneer Wrap", 475],
          ["Crispy Paneer Wrap", 445],
          ["Mediterranean Hummus Pita", 399],
          ["Mexican Chicken Wrap", 499],
          ["Tandoori Chicken Wrap", 545],
          ["Crunchy Chicken Wrap", 525],
          ["Chicken Shawarma Wrap", 545]
        ]
      }
    ]
  },

  {
    id: "asian",
    label: "Asian",
    sections: [
      {
        title: "Dimsums & Bao",
        items: [
          ["Signature Veg Dumplings", 425],
          ["Signature Paneer Dumplings", 475],
          ["Chicken Dumplings", 499],
          ["Crystal Veg Dumplings", 575],
          ["Dragon Chilli Chicken Dimsums", 625],
          ["Veg Gyoza (Pan Fried)", 545],
          ["Chicken Gyoza (Pan Fried)", 599],
          ["Veg Bao", 399],
          ["Chicken Bao", 475]
        ]
      },
      {
        title: "Noodles & Rice",
        items: [
          ["Chilli Garlic Noodles", 499],
          ["Hakka Noodles", 499],
          ["Singapore Noodles (Veg)", 525],
          ["Pad Thai Noodles", 545],
          ["Singapore Noodles (Chicken)", 575],
          ["Veg Fried Rice", 525],
          ["Chicken Fried Rice", 545]
        ]
      },
      {
        title: "Add Ons",
        items: [
          ["Chicken", 199],
          ["Prawns", 149]
        ]
      }
    ]
  },

  {
    id: "desserts",
    label: "Desserts",
    sections: [
      {
        title: "Desserts (Egg)",
        items: [
          ["Brownie", 399],
          ["Cheesecake", 425],
          ["Nutella Hazelnut", 445],
          ["Tiramisu", 499]
        ]
      },
      {
        title: "Desserts (Eggless)",
        items: [
          ["Biscoff Cheese Cake", 475],
          ["Nutella Slice", 425],
          ["Gulab Jamun", 145],
          ["Rajbhog", 85],
          ["Sponge", 75],
          ["Ice Cream", 99]
        ]
      }
    ]
  },

  {
    id: "coffee",
    label: "Coffee & Tea",
    sections: [
      {
        title: "Hot Coffee",
        items: [
          ["Americano", 275],
          ["Cappuccino", 355],
          ["Espresso", 220],
          ["Latte", 325],
          ["Café Mocha", 420],
          ["Coconut Coffee", 395]
        ]
      },
      {
        title: "Cold Coffee",
        items: [
          ["Hazelnut Cold Coffee", 425],
          ["Traffic Cold Coffee", 425],
          ["Choco Cold Coffee", 415],
          ["Caramel Cold Coffee", 399],
          ["Irish Cold Coffee", 415],
          ["Cold Coffee", 385]
        ]
      },
      {
        title: "Hot Tea",
        items: [
          ["Jasmine Tea", 249],
          ["Green Tea", 189],
          ["Black Tea", 149],
          ["Darjeeling Tea", 249]
        ]
      },
      {
        title: "Ice Tea",
        items: [
          ["Lemon Ice Tea", 345],
          ["Peach Ice Tea", 345],
          ["Watermelon Ice Tea", 345],
          ["Passion Ice Tea", 375]
        ]
      }
    ]
  },

  {
    id: "drinks",
    label: "Shakes & Mocktails",
    sections: [
      {
        title: "Mocktails",
        items: [
          ["Berry Blossom", 385, "Cranberry juice, strawberry syrup, raspberry syrup"],
          ["Ocean Pina Colada", 395, "Pineapple juice, coconut milk, topped with blue pea tea"],
          ["Tropical Spritzer", 395, "Peach and lime juice, topped with ginger ale"],
          ["Pink House Special", 385, "Fruit crush, lime juice, chaat masala, topped with soda"],
          ["Watermelon Spritzer", 385, "Basil leaf, fresh watermelon, topped with soda"],
          ["Passion Aroma", 375, "Fresh passion fruit, vanilla syrup, lime, kaffir lime leaf, orange juice"],
          ["Virgin Mojito", 345, "Fresh mint, lemon chunks and club soda"],
          ["Italian Smooch", 375, "Red ginger cordial and lime chunks, topped with cola"],
          ["Pink Aviation", 375, "Fresh berry, lime and simple syrup, topped with ginger ale"],
          ["Tin Tin", 395, "Blueberry puree, fresh mint, lime juice, soda and tonic"],
          ["Spice Jamun Mule", 395, "Fresh jamun, rock salt and a touch of cranberry juice"],
          ["Angry Lemonade", 385, "Kaffir lime leaf, simple syrup and Angostura bitters, topped with Sprite"],
          ["Kiwi The Light", 385, "Kiwi crush, litchi juice and lime simple syrup"],
          ["Pandu Cheery", 345, "Lime, simple syrup, chaat masala and rock salt, topped with cola"],
          ["Cheery Mojito", 385]
        ]
      },
      {
        title: "Shakes",
        items: [
          ["Strawberry Shake", 399],
          ["Mango Shake", 425],
          ["Caramel and Vanilla Shake", 399],
          ["Butterscotch Shake", 399],
          ["Oreo Shake", 420],
          ["Blueberry Shake", 399],
          ["Kit Kat Shake", 420],
          ["Nutella with Crumble", 399],
          ["Mix Berry Shake", 399],
          ["Blackcurrant Shake", 399]
        ]
      },
      {
        title: "Smoothies",
        items: [
          ["Strawberry Smoothie", 425],
          ["Mango Smoothie", 425],
          ["Blue Smoothie", 425],
          ["Blackcurrant Smoothie", 425],
          ["Mix Berry Smoothie", 425]
        ]
      },
      {
        title: "Beverages",
        items: [
          ["Coke Can", 225],
          ["Diet Coke", 245],
          ["Sprite Can", 225],
          ["Tonic Water", 135],
          ["Ginger Ale", 245],
          ["Red Bull", 295],
          ["Fresh Lime Soda", 225],
          ["Mineral Water", 149]
        ]
      }
    ]
  }
];

/* Display code: builds the tabs and dishes from the data above */

const tabsBox = document.getElementById("menu-tabs");
const menuBox = document.getElementById("menu-content");

function showCategory(id) {
  const group = MENU.find(g => g.id === id);
  menuBox.innerHTML = "";

  group.sections.forEach(section => {
    const heading = document.createElement("h3");
    heading.className = "menu-section-title";
    heading.textContent = section.title;
    menuBox.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "menu-grid";

    section.items.forEach(([name, price, note]) => {
      const card = document.createElement("div");
      card.className = "menu-item";

      const top = document.createElement("div");
      top.className = "item-top";

      const title = document.createElement("h4");
      title.textContent = name;

      const cost = document.createElement("span");
      cost.textContent = "₹" + price;

      top.appendChild(title);
      top.appendChild(cost);
      card.appendChild(top);

      if (note) {
        const desc = document.createElement("p");
        desc.textContent = note;
        card.appendChild(desc);
      }

      grid.appendChild(card);
    });

    menuBox.appendChild(grid);
  });
}

// Create one tab button for every category
MENU.forEach((group, index) => {
  const btn = document.createElement("button");
  btn.className = "tab" + (index === 0 ? " active" : "");
  btn.textContent = group.label;

  btn.addEventListener("click", () => {
    tabsBox.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    showCategory(group.id);
  });

  tabsBox.appendChild(btn);
});

// Show the first category when the page loads
showCategory(MENU[0].id);