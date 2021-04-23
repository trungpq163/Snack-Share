import { Request, Response, NextFunction } from 'express';
import cloudinary from '../config/cloudinary';
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
import { uploadImageService } from '../services/cloudinary';

export const addCourseCtrl = (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    addCourseService(categoryModel, req.body.category, (_error: any, _cat: any) => {
        const uniqueFilename = new Date().toISOString();
        uploadImageService(
            cloudinary,
            req.body.image,
            {
                public_id: `courses/${uniqueFilename}`,
                tags: 'courses',
            },
            (err: any, img: any) => {
                if (err) {
                    return res.status(500).send(err);
                }
                const model = new courseModel({
                    courseName: req.body.courseName,
                    image: img.url || 'not upload!',
                    price: req.body.price,
                    language: req.body.language,
                    skillLevel: req.body.skillLevel,
                    courseDescription: req.body.courseDescription,
                    instructor: req.body.instructor,
                    category: req.body.category,
                });
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
            }
        );
    });
};

export const updateCourseCtrl = (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    const uniqueFilename = new Date().toISOString();
    uploadImageService(
        cloudinary,
        req.body.image,
        {
            public_id: `courses/${uniqueFilename}`,
            tags: 'courses',
        },
        (err: any, img: any) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            const reqBody = {
                courseName: req.body.courseName,
                image: img.url || 'not upload!',
                price: req.body.price,
                language: req.body.language,
                skillLevel: req.body.skillLevel,
                courseDescription: req.body.courseDescription,
                instructor: req.body.instructor,
                category: req.body.category,
            };
            updateCourseService(courseModel, req.query.id, reqBody, { new: true })
                .then((doc) => {
                    res.json(doc);
                })
                .catch((err) => {
                    res.status(500).json(err);
                });
        }
    );
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
        .then((doc: any) => {
            res.json(doc);
        })
        .catch((err: any) => {
            res.status(500).json(err);
        });
};

export const getCourseByInstructorIdCtrl = (req: Request, res: Response) => {
    getCourseByInstructorIdService(courseModel, req.query.id, (err: any, results: any) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (results) {
            return res.status(200).json(results);
        }
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
