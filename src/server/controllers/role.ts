import { Request, Response } from 'express';
import Role from '../models/Role';

import { addRoleService, showRolesService } from '../services/role';

export const addRoleCtrl = (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    const model = new Role(req.body);
    addRoleService(model)
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

export const showRolesCtrl = (_req: Request, res: Response) => {
    showRolesService(Role)
        .then((doc) => {
            res.setHeader('Content-Range', 'users 0-5/5');
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
