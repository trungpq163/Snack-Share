import express, { Router } from 'express';
import passport from 'passport';

import {
    addCategoryCtrl,
    getCategoriesCtrl,
    getCategoryCtrl,
    updateCategoryCtrl,
} from '../controllers/category';

const router: Router = express.Router();

router
    .route('/category')
    .get(getCategoryCtrl)
    .put(passport.authenticate('admin', { session: false }), updateCategoryCtrl);

router
    .route('/category/add')
    .post(passport.authenticate('admin', { session: false }), addCategoryCtrl);

router.route('/categories').get(getCategoriesCtrl);

export default router;
