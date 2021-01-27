import { Request, Response, NextFunction } from 'express';
import courseModel from '../models/Course';
import categoryModel from '../models/Category';

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

    addCourseService(categoryModel, req.body.category, (error: any, cat: any) => {
        if (!error && cat) {
            console.log(cat);
            req.body.category = cat[0]._id;
        }

        const model = new courseModel(req.body);
        saveAddCourseService(model)
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
    getCoursesService(courseModel, (err: any, results: any) => {
        if (err) {
            return next(err);
        }
        if (results) {
            return res.json(results);
        }
    });
};

export const getCourseCtrl = (req: Request, res: Response) => {
    getCourseService(courseModel, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const getCourseByInstructorIdCtrl = (req: Request, res: Response) => {
    getCourseByInstructorIdService(courseModel, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const updateCourseCtrl = (req: Request, res: Response) => {
    updateCourseService(courseModel, req.query.id, req.body, { new: true })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const deleteCourseCtrl = (req: Request, res: Response) => {
    deleteCourseService(courseModel, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
