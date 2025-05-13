const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre:   { type: String, required: true },
    precio:   { type: Number, required: true },
    stock:    { type: Number, default: 0 },
    categoria:{ type: String },
    descripcion:{ type: String }
});

module.exports = mongoose.model('Producto', ProductoSchema);
