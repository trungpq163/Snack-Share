import express, { Router } from 'express';

import {
    addEnrollmentByStudentCtrl,
    addEnrollmentCtrl,
    deleteEnrollmentCtrl,
    getCheckEnrollmentCtrl,
    getEnrollmentByStudentCtrl,
    getEnrollmentsCtrl,
} from '../controllers/enrollment';

import { createCheckout } from '../controllers/checkout';

const router: Router = express.Router();

router.route('/checkout').post(createCheckout);
router.route('/enrollments').get(getEnrollmentsCtrl);
router.route('/enrollmentbystudent').get(getEnrollmentByStudentCtrl);
router.route('/checkenrollment').get(getCheckEnrollmentCtrl);
router.route('/enroll/add').post(addEnrollmentCtrl);
router.route('/enrollbystudent/add').post(addEnrollmentByStudentCtrl);
router.route('/enrollment').delete(deleteEnrollmentCtrl);

export default router;
