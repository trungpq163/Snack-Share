import { Request, Response, NextFunction } from 'express';

import Enrollment from '../models/Enrollment';
import Course from '../models/Course';
import User from '../models/User';

import {
    getEnrollmentsService,
    getEnrollmentByStudentService,
    getCheckEnrollmentService,
    findUserByEmailService,
    findCourseByNameService,
    saveEnrollmentService,
    deleteEnrollmentService,
} from '../services/enrollment';

export const getEnrollmentsCtrl = (_req: Request, res: Response, next: NextFunction) => {
    getEnrollmentsService(Enrollment, (err: any, results: any) => {
        if (err) {
            return next(err);
        }

        if (results) {
            return res.json(results);
        }
    });
};

export const getEnrollmentByStudentCtrl = (req: Request, res: Response) => {
    getEnrollmentByStudentService(Enrollment, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const getCheckEnrollmentCtrl = (req: Request, res: Response) => {
    getCheckEnrollmentService(Enrollment, req.query.id, req.query.courseid)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const addEnrollmentCtrl = (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    findUserByEmailService(User, req.body.student, (error: any, cat: any) => {
        if (!error && cat) {
            console.log(cat);
            req.body.student = cat[0]._id;
        }
    });

    findCourseByNameService(Course, req.body.course, (error: any, cat: any) => {
        if (!error && cat) {
            console.log(cat);
            req.body.course = cat[0]._id;
        }
    });

    const model = new Enrollment(req.body);
    saveEnrollmentService(model)
        .then((doc) => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(200).send(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const addEnrollmentByStudentCtrl = (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    const model = new Enrollment(req.body);
    saveEnrollmentService(model)
        .then((doc) => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(200).send(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const deleteEnrollmentCtrl = (req: Request, res: Response) => {
    deleteEnrollmentService(Enrollment, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
