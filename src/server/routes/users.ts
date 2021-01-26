import express, { Router } from 'express';

import {
    deleteUserByIdCtrl,
    getUserCtrl,
    getUsersCtrl,
    loginUsersCtrl,
    postUserCtrl,
    registerUsersCtrl,
    returnCurrentUserFromTokenCtrl,
    updateUserByIdCtrl,
} from '../controllers/users';

import { hasAuthorization } from '../middleware/checkAuth';

const router: Router = express.Router();

/**
 * @route POST api/users/register
 * @desc Register users role
 * @access Public
 */
router.route('/users/register').post(registerUsersCtrl);

/**
 * @route POST api/users/login
 * @desc Login users route => return jwt token
 * @access Public
 */
router.route('/users/login').post(loginUsersCtrl);

/**
 * @route GET api/users/current
 * @desc Return/Retrieve the current user from the token
 * @access Private
 */
router.route('/current').get(hasAuthorization, returnCurrentUserFromTokenCtrl);

/**
 * @route GET api/users
 * @desc Return all users in mongoDB
 * @access Public
 */
router.route('/users').get(getUsersCtrl);

/**
 * @route GET POST PUT DELETE api/user
 * @desc Display Profile User, Update Profile User, Delete Some Info, vv
 * @access Public
 */
router
    .route('/user')
    .get(getUserCtrl)
    .post(postUserCtrl)
    .put(updateUserByIdCtrl)
    .delete(deleteUserByIdCtrl);

export default router;
