const database = require('../model/database');

class LoginController {
    show(req, res, next) {
        const search = (req.body.search) ? req.body.search : ''; 
        const sql = `SELECT * FROM products WHERE name LIKE '%${search}%'`;
        database.query(sql, (err, products) => {
            if(err) res.send(err);
            else res.render('home', {
                products: products
            });
        });
    }
}

module.exports = new LoginController;