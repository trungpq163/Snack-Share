import express, { Router } from 'express';
import passport from 'passport';

import {
    addEducationToProfileCtrl,
    addExperienceToProfileCtrl,
    createOrEditUserProfileCtrl,
    deleteEducationFromProfileCtrl,
    deleteExperienceFromProfileCtrl,
    deleteUserFromUserIdCtrl,
    getAllProfilesCtrl,
    getCurrentUserProfileCtrl,
    getProfileByHandleCtrl,
    getProfileByUserIdCtrl,
    testProfileCtrl,
} from '../controllers/profile';

const router: Router = express.Router();

/**
 * @route GET api/profile/test
 * @desc Tests profile route
 * @access Public
 */
router.route('/test').get(testProfileCtrl);

/**
 * @route GET api/profile
 * @desc Get current users profile
 * @access Private
 */

/**
 * @route POST api/profile
 * @desc Create or edit userProfile
 * @access Private
 */

/**
 * @route DELETE api/profile
 * @desc Delete user and profile
 * @access Private
 */

router
    .route('/')
    .get(passport.authenticate('jwt', { session: false }), getCurrentUserProfileCtrl)
    .post(passport.authenticate('jwt', { session: false }), createOrEditUserProfileCtrl)
    .delete(passport.authenticate('jwt', { session: false }), deleteUserFromUserIdCtrl);

/**
 * @route GET api/profile/all
 * @desc Get all profiles
 * @access Public
 */
router.route('/all').get(getAllProfilesCtrl);

/**
 * @route GET api/profile/handle/:handle
 * @desc Get profile by handle
 * @access Public
 */
router.route('/handle/:handle').get(getProfileByHandleCtrl);

/**
 * @route GET api/profile/user/:user_id
 * @desc Get profile by userId
 * @access Public
 */
router.route('/user/:user_id').get(getProfileByUserIdCtrl);

/**
 * @route POST api/profile/experience
 * @desc Add experience to profile
 * @access Private
 */
router
    .route('/experience')
    .post(passport.authenticate('jwt', { session: false }), addExperienceToProfileCtrl);

/**
 * @route POST api/profile/education
 * @desc Add education to profile
 * @access Private
 */
router
    .route('/education')
    .post(passport.authenticate('jwt', { session: false }), addEducationToProfileCtrl);

/**
 * @route DELETE api/profile/experience/:exp_id
 * @desc Delete experience from profile
 * @access Private
 */
router
    .route('/experience/:exp_id')
    .delete(passport.authenticate('jwt', { session: false }), deleteExperienceFromProfileCtrl);

/**
 * @route DELETE api/profile/education/:edu_id
 * @desc Delete education from profile
 * @access Private
 */
router
    .route('/education/:edu_id')
    .delete(passport.authenticate('jwt', { session: false }), deleteEducationFromProfileCtrl);

export default router;
