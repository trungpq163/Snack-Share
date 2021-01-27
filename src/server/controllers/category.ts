import { Request, Response } from 'express';
import categoryModel from '../models/Category';

import {
    addCategoryService,
    getCategoryService,
    updateCategoryService,
    getCategoriesService,
} from '../services/category';

export const addCategoryCtrl = (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    const model = new categoryModel(req.body);
    addCategoryService(model)
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

export const getCategoryCtrl = (req: Request, res: Response) => {
    getCategoryService(categoryModel, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const updateCategoryCtrl = (req: Request, res: Response) => {
    updateCategoryService(categoryModel, req.query.id, req.body, { new: true })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const getCategoriesCtrl = (_req: Request, res: Response) => {
    getCategoriesService(categoryModel)
        .then((doc) => {
            res.setHeader('Content-Range', 'users 0-5/5');
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
