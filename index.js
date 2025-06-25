const express = require('express');
const cors = require('cors');
const perfumesRoutes = require('./routes/perfumes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/perfumes', perfumesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});

