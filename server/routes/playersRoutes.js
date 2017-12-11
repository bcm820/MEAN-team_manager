
const players = require('../controllers/playersController');

module.exports = (router) => {

    router.use((req, res, next) => {
        console.log('Players:', req.method, req.url)
        next();
    });

    router.param('id', (req, res, next, id) => {
       req.id = id;
       next();
    });

    // /api
    router.get('/list', players.list);
    router.post('/create', players.create);
    router.post('/update/:id', players.update);
    router.post('/delete/:id', players.delete);

};