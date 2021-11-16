const data = require('../../database/platos.json');

const mainController = {
    menu: (req, res) => {
        let platos = data;
        let about = {
            titulo: "Pimienta & Sal",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.",
            exceptur: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        res.render('../views/index.ejs', {'platos': platos, 'about': about});
    },
    detalle: (req, res) => {
        let platos = data;
        
        let idPlato = req.params.id;
        res.render('../views/detalleMenu', {'platos': platos, 'idPlato': idPlato});
    }
}

module.exports = mainController;