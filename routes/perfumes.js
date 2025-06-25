const express = require('express');
const router = express.Router();
const supabase = require('../supabase');

// Obtener todos los perfumes
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('perfumes').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Agregar nuevo perfume
router.post('/', async (req, res) => {
  const { nombre, notas, intensidad, duracion, ocasion, cantidad } = req.body;

  const { data, error } = await supabase.from('perfumes').insert([
    { nombre, notas, intensidad, duracion, ocasion, cantidad },
  ]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

module.exports = router;
