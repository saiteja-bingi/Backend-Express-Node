import exp from 'express';

const productApp = exp.Router();

let products = [];

// route to handle get req
productApp.get('/products', (req, res) => {
    // get products and send res
    res.json({ message: "All products", payload: products });
});

// route to send a product by id
productApp.get('/products/:id', (req, res) => {
    // get product by id and send res
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id);
    if (product != undefined) {
        res.json({ message: "Product found", payload: product });
    } else {
        res.json({ message: "Product not found" });
    }
});

// route to handle post req
productApp.post('/product', (req, res) => {
    // get product from req
    const product = req.body;
    // add product to products
    products.push(product);
    // send res
    res.json({ message: "Product added" });
});

// route to handle put req
productApp.put('/product', (req, res) => {
    // get modified product from client
    let modProduct = req.body;
    // get index of product
    let index = products.findIndex(product => product.id === modProduct.id);
    // update product
    if (index !== -1) {
        products[index] = modProduct;
        res.json({ message: "Product updated" });
    } else {
        res.json({ message: "Product not found" });
    }
});

// route to handle delete req
productApp.delete('/product', (req, res) => {
    // get product id from client
    let id = req.body.id;
    // remove product from products
    let index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        res.json({ message: "Product deleted" });
    } else {
        res.json({ message: "Product not found" });
    }
});

export default productApp;
