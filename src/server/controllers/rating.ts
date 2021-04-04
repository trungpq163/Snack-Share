import { Request, Response } from 'express';

import ratingModel from '../models/Rating';

import validateRating from '../validation/rating';
import {
    findRatingByUserAndCourseService,
    saveRatingService,
    findRatingByCourse,
} from '../services/rating';

export const addRatingCtrl = (req: Request, res: Response) => {
    const { user, course, content, star } = req.body;
    const { errors, isValid } = validateRating({ content, star });

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    findRatingByUserAndCourseService(ratingModel, user, course).then((rating) => {
        if (rating) {
            errors.content = 'You already rating!';
            return res.status(400).json(errors);
        }

        const newRating = new ratingModel({
            user,
            course,
            content,
            star,
        });

        saveRatingService(newRating)
            .then((rating) => res.status(200).json(rating))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    });
};

export const getRatingByCourse = (req: Request, res: Response) => {
    findRatingByCourse(ratingModel, req.query.course)
        .then((rating) => res.status(200).json(rating))
        .catch((err) => res.status(400).json(err));
};
