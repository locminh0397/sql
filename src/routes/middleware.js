const database = require('../model/database');

const middleware = {

    logged: function(req, res, next) {
        const id = req.cookies.id;
        if(id) {
            database.query(`SELECT * FROM account WHERE id = ${id} LIMIT 1`, (err, result) => {
                if(err) res.send(err);
                else if(result.length === 0) res.redirect('/login');
                else next();
            });
        }
        else res.redirect('/login');
    },
}

module.exports = middleware;