const path = require('path');

const configs = {
    test: {
        database: 'mydb',
        username: '',
        password: '',
        opt: {
            dialect: 'sqlite',
            storage: path.join(process.cwd(), 'db/db.sqlite')
        }
    },
    development: {
        uri: 'mysql://root:12345678@localhost:3306/mydb'
    },
    production: {
        uri: ''
    }
};

module.exports = configs[process.env.NODE_ENV || 'development'];