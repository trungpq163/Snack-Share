import { Request, Response, NextFunction } from 'express';
import Course from '../models/Course';
import Category from '../models/Category';

import {
    addCourseService,
    saveAddCourseService,
    getCoursesService,
    getCourseService,
    getCourseByInstructorIdService,
    updateCourseService,
    deleteCourseService,
} from '../services/course';

export const addCourseCtrl = (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    addCourseService(Category, req.body.category, (error: any, cat: any) => {
        if (!error && cat) {
            console.log(cat);
            req.body.category = cat[0]._id;
        }

        console.log(req?.body?.instructor);
        const courseModel = new Course(req.body);
        saveAddCourseService(courseModel)
            .then((doc) => {
                if (!doc || doc.length === 0) {
                    return res.status(500).send(doc);
                }
                res.status(200).send(doc);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });
};

export const getCoursesCtrl = (_req: Request, res: Response, next: NextFunction) => {
    getCoursesService(Course, (err: any, results: any) => {
        if (err) {
            return next(err);
        }
        if (results) {
            return res.json(results);
        }
    });
};

export const getCourseCtrl = (req: Request, res: Response) => {
    getCourseService(Course, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const getCourseByInstructorIdCtrl = (req: Request, res: Response) => {
    getCourseByInstructorIdService(Course, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const updateCourseCtrl = (req: Request, res: Response) => {
    updateCourseService(Course, req.query.id, req.body, { new: true })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const deleteCourseCtrl = (req: Request, res: Response) => {
    deleteCourseService(Course, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
