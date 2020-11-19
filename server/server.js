const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Route imports
const shipmentRoute = require('./routes/shipment.js');
const productRoute = require('./routes/product.js')

// Middleware
app.use('/api/shipment', shipmentRoute)
app.use('/api/product', productRoute)
app.use(express.json());

// Port configuration
const port = 3001;
app.listen(process.env.PORT || port, () => {
    console.log(`Server runs on port ${process.env.PORT || port}`)
})
