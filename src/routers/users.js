const express= require ('express');
const router = express.Router();
const usersController = require ('../controllers/usersController');

/*register*/
router.get('/register', usersController.register);
router.post('/register', (req, res)=>{
    res.send('Ya te registraste')
});

/*Login*/
router.get('/login', usersController.login);
router.post('/login', (req, res)=>{
res.send('Ya te logueaste');
})

module.exports = router;