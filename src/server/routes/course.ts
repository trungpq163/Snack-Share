import express, { Router } from 'express';

import {
    addCourseCtrl,
    deleteCourseCtrl,
    getCourseByInstructorIdCtrl,
    getCourseCtrl,
    getCoursesCtrl,
    updateCourseCtrl,
} from '../controllers/course';

const router: Router = express.Router();

router.route('/course/add').post(addCourseCtrl);
router.route('/courses').get(getCoursesCtrl);
router.route('/course').get(getCourseCtrl).put(updateCourseCtrl).delete(deleteCourseCtrl);
router.route('/coursebyinstructor').get(getCourseByInstructorIdCtrl);

export default router;
