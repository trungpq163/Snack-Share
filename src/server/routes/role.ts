import express, { Router } from 'express';
import { addRoleCtrl, showRolesCtrl } from '../controllers/role';

const router: Router = express.Router();

router.route('/role/add').post(addRoleCtrl);

router.route('/show-roles').get(showRolesCtrl);

export default router;
