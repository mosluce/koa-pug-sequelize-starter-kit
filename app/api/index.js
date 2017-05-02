const Router = require('koa-router');
const router = new Router();
const Dog = require('../models/dog');

router.get('/dogs', async (ctx) => {
    let dogs = await Dog.findAll();

    ctx.body = dogs;
});

module.exports = router.routes();