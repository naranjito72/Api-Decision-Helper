import Router from 'express';
import create from './create.js';
import listOne from './listOne.js';
import updateOne from './updateOne.js';
import removeOne from './removeOne.js';
import list from './list.js';
import remove from './remove.js';

const router = Router();

router.route('/')
    .post(create);

router.route('/:id')
    .get(listOne)
    .put(updateOne)    
    .delete(removeOne);

router.route('/pregunta/:id_quest')
    .get(list)
    .delete(remove);

export default router;  