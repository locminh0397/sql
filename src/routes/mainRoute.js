const loginRoute = require('./loginRoute');
const homeRoute = require('./homeRoute');

function route(app) {
    app.use('/login', loginRoute);

    app.use('/', homeRoute);
}

module.exports = route;
