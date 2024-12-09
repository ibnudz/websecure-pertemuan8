const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require("cors");
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});