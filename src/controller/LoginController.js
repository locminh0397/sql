const database = require('../model/database');

class LoginController {
    show(req, res, next) {
        res.render('login');
    }

    checkLogin(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const sql = `SELECT * FROM account WHERE username = '${username}' AND password = '${password}' LIMIT 1`;
        database.query(sql, (err, result) => {
            if(err) res.send(err);
            else if(result.length === 0) res.redirect('/login');
            else {
                res.cookie('id', `${result[0].id}`)
                res.redirect('/');
            }
        });
    }
}

module.exports = new LoginController;