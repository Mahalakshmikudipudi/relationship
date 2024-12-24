const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);

// Sync database
(async () => {
    try {
        await sequelize.sync({ force: true }); // Force: true for development only
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Error syncing database:', error.message);
    }
})();

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
