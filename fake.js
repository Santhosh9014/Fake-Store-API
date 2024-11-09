const { faker } = require('@faker-js/faker');
 // Install via npm (npm install faker)

const electronicsKeywords = ["phone", "laptop", "headphones", "tablet", "smartwatch"];
const clothingKeywords = ["shirt", "pants", "jacket", "dress", "socks"];
const homeGoodsKeywords = ["sofa", "table", "lamp", "vase", "couch"];
const beautyKeywords = ["lipstick", "foundation", "mascara", "perfume", "nail polish"];

// Function to get category based on the product name
function getCategoryByName(name) {
    // Check if the name contains any of the electronics keywords
    if (electronicsKeywords.some(keyword => name.toLowerCase().includes(keyword))) {
        return "Electronics";
    } 
    // Check if the name contains any of the clothing keywords
    else if (clothingKeywords.some(keyword => name.toLowerCase().includes(keyword))) {
        return "Clothing";
    } 
    // Check for home goods
    else if (homeGoodsKeywords.some(keyword => name.toLowerCase().includes(keyword))) {
        return "Home Goods";
    } 
    // Check for beauty products
    else if (beautyKeywords.some(keyword => name.toLowerCase().includes(keyword))) {
        return "Beauty";
    } 
    // Default category
    else {
        return "General";
    }
}

// Function to generate a random product
function generateRandomProduct(id) {
    const name = faker.commerce.productName();  // Random product name
    const price = (Math.random() * (1000 - 500) + 500).toFixed(2); // Random price between 500 and 1000
    const category = getCategoryByName(name);  // Assign category based on product name
    const description = faker.commerce.productDescription(); // Random description
    const stock = Math.floor(Math.random() * 101);
    const url="";  // Random stock number between 0 and 100

    return {
        id: id,
        name: name,
        price: price,
        description: description,
        category: category,
        stock: stock,
        url:url
    };
}

// Generate 500 products
const products = [];
for (let i = 1; i <= 500; i++) {
    products.push(generateRandomProduct(i));
}

// Write products to a JSON file (requires 'fs' module)
const fs = require('fs');
fs.writeFileSync('products.json', JSON.stringify(products, null, 2), 'utf-8');

// Log products to console (optional)
console.log(products);
