const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { name, price, userId } = req.body;

    try {
        const product = await Product.create({ name, price, userId });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductsByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const products = await Product.findAll({ where: { userId } });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        await product.destroy();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
