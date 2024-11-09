const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve the product data from the products.json file
app.get('/api/products', (req, res) => {
  fs.readFile('products.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the product file');
    } else {
      res.json(JSON.parse(data));  // Send the product data as a JSON response
    }
  });
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  fs.readFile('products.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the product file');
    } else {
      const products = JSON.parse(data);
      const product = products.find(p => p.id === parseInt(productId));
      if (product) {
        res.json(product);
      } else {
        res.status(404).send('Product not found');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
