import { Request, Response } from 'express';

import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validateRegisterInput from '../validation/register';
import validateLoginInput from '../validation/login';

import userModel from '../models/User';

import {
    findUserByEmailService,
    saveUserService,
    findAllUsersService,
    findAllStudentsService,
    findUserByQueryIdService,
    findUserAndUpdateByIdService,
    findAndRemoveUserById,
} from '../services/users';

import keys from '../config/key';

export const registerUsersCtrl = (req: Request, res: Response) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    findUserByEmailService(userModel, req.body.email).then((user) => {
        if (user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        }

        // @ts-ignore
        const avatar = gravatar.url(req.body.email, {
            s: '200', // Size
            r: 'pg', // Rating
            d: 'mm', // Default
        });

        const newUser = new userModel({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        });

        bcrypt.genSalt(10, (_err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                    throw err;
                }
                newUser.password = hash;
                saveUserService(newUser)
                    .then((user) => res.json(user))
                    .catch((err) => console.log(err));
            });
        });
    });
};

export const loginUsersCtrl = (req: Request, res: Response) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    findUserByEmailService(userModel, email).then((user) => {
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }

        // Check password
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                // User match create jt payload
                const payload = {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    avatar: user.avatar,
                    role: user.role,
                };

                // Sign token
                jwt.sign(payload, keys.SECRET_ORKEY, { expiresIn: 7200 }, (_err, token) => {
                    res.status(200).json({
                        success: true,
                        token: 'Bearer ' + token,
                        first_name: user.first_name,
                        last_name: user.last_name,
                    });
                });
            } else {
                errors.password = 'Password incorrect';
                return res.status(400).json(errors);
            }
        });
    });
};

export const returnCurrentUserFromTokenCtrl = (req: Request, res: Response) => {
    res.json({
        // @ts-ignore
        id: req.user.id,
        // @ts-ignore
        first_name: req.user.first_name,
        // @ts-ignore
        email: req.user.email,
    });
};

export const getUsersCtrl = (_req: Request, res: Response) => {
    findAllUsersService(userModel)
        .then((doc) => {
            res.setHeader('Content-Range', 'users 0-5/5');
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const getStudentsCtrl = (_req: Request, res: Response) => {
    findAllStudentsService(userModel)
        .then((doc) => {
            res.setHeader('Content-Range', 'users 0-5/5');
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const postUserCtrl = (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    const model = new userModel(req.body);
    saveUserService(model)
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

export const getUserCtrl = (req: Request, res: Response) => {
    findUserByQueryIdService(userModel, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const updateUserByIdCtrl = (req: Request, res: Response) => {
    findUserAndUpdateByIdService(userModel, req.query.id, req.body, { new: true })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

export const deleteUserByIdCtrl = (req: Request, res: Response) => {
    findAndRemoveUserById(userModel, req.query.id)
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
