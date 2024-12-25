const { obtenerJoya, obtenerJoyas, prepararHATEOAS, JoyasporFiltro } = require('../models/Joyasmodel');

const  getJoyas = async (req, res) => {
        try {
            const queryString = req.query;
            const listadoJoyas = await obtenerJoyas(queryString);
            const formatHateos = await prepararHATEOAS(listadoJoyas)
            res.status(200).json(formatHateos);
    }catch (error) {
            res.status(500).json({ error: error.message });
    }
};

const getJoya = async (req, res) => {
        try {
            const { id } = req.params;
            const joya = await obtenerJoya(id)
            res.status(200).json(joya)
    } catch (error) {
            res.status(500).json({ error: error.message });
    }
};

const getFilter = async (req, res) => {
     try {
            const queryStrings = req.query
            const joyas = await JoyasporFiltro(queryStrings)
            res.json(joyas)
    } catch (error) {
            res.status(500).json({ error: error.message });
    }

}


module.exports = { getJoyas, getJoya, getFilter };