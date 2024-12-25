const { pool } = require("../config/config.js");
const format = require('pg-format');

const prepararHATEOAS = (data) => {
    const results = data.map((j) => ({
        name: j.nombre,
        href: `/joyas/joya/${j.id}`,
        categoria: j.categoria,
        metal: j.metal,
        precio: j.precio,
        stock: j.stock
    }))
    const total = joyas.length;
    return { total, results}
}

const obtenerJoyas = async ({ limits = 3, order_by = "id_ASC", page = 1 }) => {    
    const offset = (page - 1) * limits;
    const [campo, direccion] = order_by.split("_");
    const consulta = format('SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s', campo, direccion, limits, offset);
    const { rows: joyas } = await pool.query(consulta);
    return joyas;
};

const obtenerJoya = async id => {
    const consulta = 'SELECT * FROM inventario WHERE id = $1;'
    const value = [id]
    const { rows: joya } = await pool.query(consulta, value)
    return joya
}

const JoyasporFiltro = async ({ precio_min, precio_max, categoria, metal }) => {
    let filter = []
    if (precio_max) filter.push(`precio <= ${precio_max}`)
    if (precio_min) filter.push(`precio >= ${precio_min}`)
    if (categoria) filter.push(`categoria = '${categoria}'`)
    if (metal) filter.push(`metal = '${metal}'`)
    let consulta = "SELECT * FROM inventario"
    if (filter.length > 0) {
    filter = filter.join(" AND ")
    consulta += ` WHERE ${filter}`
    }
    const { rows: joyas } = await pool.query(consulta)
    return joyas
    }

module.exports = { prepararHATEOAS, obtenerJoyas, obtenerJoya, JoyasporFiltro}