const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

router.post('/', async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

router.get('/:id', async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'No se encontró el producto' });
    res.json(producto);
});

router.put('/:id', async (req, res) => {
    const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
});

router.delete('/:id', async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Producto eliminado' });
});

module.exports = router;
