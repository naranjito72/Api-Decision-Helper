import Router from 'express';
import create from './create.mjs';
import login from './login.mjs';
import listOne from './listOne.mjs';
import remove from './remove.mjs';
import update from './update.mjs';

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