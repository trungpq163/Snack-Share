import express, { Router } from 'express';
import passport from 'passport';

import {
    deleteUserByIdCtrl,
    getUserCtrl,
    getUsersCtrl,
    getStudentsCtrl,
    loginUsersCtrl,
    postUserCtrl,
    registerUsersCtrl,
    returnCurrentUserFromTokenCtrl,
    updateUserByIdCtrl,
} from '../controllers/users';

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
router
    .route('/current')
    .get(passport.authenticate('jwt', { session: false }), returnCurrentUserFromTokenCtrl);

/**
 * @route GET api/users
 * @desc Return all users in mongoDB
 * @access Private Admin
 */
router.route('/users').get(passport.authenticate('admin', { session: false }), getUsersCtrl);

/**
 * @route GET api/students
 * @desc Return all students in mongoDB
 * @access Private Admin
 */
router.route('/students').get(passport.authenticate('admin', { session: false }), getStudentsCtrl);

/**
 * @route GET POST PUT DELETE api/user
 * @desc Display Profile User, Update Profile User, Delete Some Info, vv
 * @access Private
 */
router
    .route('/user')
    .get(passport.authenticate('admin', { session: false }), getUserCtrl)
    .post(passport.authenticate('admin', { session: false }), postUserCtrl)
    .put(passport.authenticate('admin', { session: false }), updateUserByIdCtrl)
    .delete(passport.authenticate('admin', { session: false }), deleteUserByIdCtrl);

export default router;
