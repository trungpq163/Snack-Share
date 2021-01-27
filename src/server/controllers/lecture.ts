import { Request, Response } from 'express';

import courseModel from '../models/Course';
import lectureModel from '../models/Lecture';

import { findCourseByNameService } from '../services/enrollment';
import { getLecturesService, saveLectureService } from '../services/lecture';

export const getLecturesCtrl = (req: Request, res: Response) => {
    getLecturesService(lectureModel, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const postVideosCtrl = (req: Request, res: Response) => {
    findCourseByNameService(courseModel, req.body.course, (error: any, cat: any) => {
        if (!error && cat) {
            req.body.course = cat[0]._id;
        }

        if (req.files !== undefined) {
            // @ts-ignore
            // eslint-disable-next-line prefer-const
            let imageFile = req.files.file;
            // @ts-ignore
            imageFile.mv(`Client/public/assets/${req.files.file.name}`);
            if (imageFile) {
                req.body.videoLink = `/assets/${imageFile.name}`;
            }
        } else {
            console.log(req.body.videoLink);
        }

        const upload = new lectureModel(req.body);
        saveLectureService(upload);
        res.send('This is Post Route Upload');
    });
};

export const postVideosYoutubeCtrl = (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    const model = new lectureModel(req.body);
    saveLectureService(model)
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
