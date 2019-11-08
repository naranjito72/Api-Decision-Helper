import Router from 'express';
import create from './create.mjs';
import listOne from './listOne.mjs';
import updateOne from './updateOne.mjs';
import removeOne from './removeOne.mjs';
import list from './list.mjs';
import remove from './remove.mjs';

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