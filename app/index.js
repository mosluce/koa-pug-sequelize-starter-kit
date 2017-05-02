const Router = require('koa-router');
const router = new Router();
const views = require('koa-views');
const path = require('path');

router.use('/api', require('./api'));
router.use(views(path.join(__dirname, 'views'), {
    extension: 'pug',
    map: {
        pug: 'pug'
    }
}), require('./controllers'));

module.exports = router.routes();


