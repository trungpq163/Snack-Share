import express, { Router } from 'express';
import passport from 'passport';
import {
    addEnrollmentByStudentCtrl,
    addEnrollmentCtrl,
    deleteEnrollmentCtrl,
    getCheckEnrollmentCtrl,
    getEnrollmentByStudentCtrl,
    getEnrollmentsCtrl,
    updateEnrollmentByIdCtrl,
} from '../controllers/enrollment';

const router: Router = express.Router();

router.route('/enrollments').get(getEnrollmentsCtrl);

router
    .route('/enrollmentbystudent')
    .get(passport.authenticate('jwt', { session: false }), getEnrollmentByStudentCtrl);

router
    .route('/checkenrollment')
    .get(passport.authenticate('jwt', { session: false }), getCheckEnrollmentCtrl);

router
    .route('/enroll/add')
    .post(passport.authenticate('admin', { session: false }), addEnrollmentCtrl);

router
    .route('/enrollbystudent/add')
    .post(passport.authenticate('jwt', { session: false }), addEnrollmentByStudentCtrl);

router
    .route('/enrollment')
    .delete(passport.authenticate('admin', { session: false }), deleteEnrollmentCtrl);

router
    .route('/enrollmentInstructor')
    .put(passport.authenticate('instructor', { session: false }), updateEnrollmentByIdCtrl)
    .delete(passport.authenticate('instructor', { session: false }), deleteEnrollmentCtrl);

export default router;
