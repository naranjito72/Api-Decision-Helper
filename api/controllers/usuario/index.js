import Router from 'express';
import create from './create.js';
import login from './login.js';
import listOne from './listOne.js';
import remove from './remove.js';
import update from './update.js';

const router = Router();

router.route('/register')
    .post(create)

router.route('/login')
    .post(login);

// hasta aquí
/*
router.route('/user/:id')
    .get(listOne)
    .put(update)    
    .delete(remove);
*/

export default router;  