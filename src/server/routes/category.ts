import express, { Router } from 'express';
import {
    addCategoryCtrl,
    getCategoriesCtrl,
    getCategoryCtrl,
    updateCategoryCtrl,
} from '../controllers/category';

const router: Router = express.Router();

router.route('/category').get(getCategoryCtrl).put(updateCategoryCtrl);

router.route('/category/add').post(addCategoryCtrl);

router.route('/categories').get(getCategoriesCtrl);

export default router;
