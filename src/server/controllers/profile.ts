import { Request, Response } from 'express';

import validateProfileInput from '../validation/profile';
import validateExperienceInput from '../validation/experience';
import validateEducationInput from '../validation/education';

import profileModel from '../models/Profile';
import userModel from '../models/User';

import {
    getCurrentUserProfileService,
    getAllProfilesService,
    getProfileByHandleService,
    getProfileByUserIdService,
    findProfileByUserIdService,
    updateProfileByUserIdService,
    checkIfHandleExistsService,
    saveProfileService,
    findProfileByReqUserIdService,
    findOneAndRemoveProfileService,
    findOneAndRemoveUserService,
} from '../services/profile';

export const testProfileCtrl = (_req: Request, res: Response) => res.json({ msg: 'Profile Works' });

export const getCurrentUserProfileCtrl = (req: Request, res: Response) => {
    // @ts-ignore
    getCurrentUserProfileService(profileModel, req.user.id)
        .then((profile) => {
            if (!profile) {
                return res.status(200).json({
                    res: 'There is no profile for this user',
                });
            }
            res.json(profile);
        })
        .catch((err) => res.status(404).json(err));
};

export const getAllProfilesCtrl = (_req: Request, res: Response) => {
    getAllProfilesService(profileModel)
        .then((profiles) => {
            if (!profiles) {
                return res.status(200).json({
                    res: 'There is no profile for this user',
                });
            }

            res.json(profiles);
        })
        .catch((_err: any) =>
            res.status(404).json({
                profile: 'There are no profiles',
            })
        );
};

export const getProfileByHandleCtrl = (req: Request, res: Response) => {
    getProfileByHandleService(profileModel, req.params.handle)
        .then((profile) => {
            if (!profile) {
                return res.status(200).json({
                    res: 'There is no profile for this user',
                });
            }
            res.json(profile);
        })
        .catch((err) => res.status(404).json(err));
};

export const getProfileByUserIdCtrl = (req: Request, res: Response) => {
    getProfileByUserIdService(profileModel, req.params.user_id)
        .then((profile) => {
            if (!profile) {
                return res.status(200).json({
                    res: 'There is no profile for this user',
                });
            }
            res.json(profile);
        })
        .catch((_err) =>
            res.status(404).json({
                profile: 'There is no profile for this user',
            })
        );
};

export const createOrEditUserProfileCtrl = (req: Request, res: Response) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check validation
    if (!isValid) {
        // return my errors with 400 status
        return res.status(400).json(errors);
    }

    // Get fields
    const profileFields: any = {};
    // @ts-ignore
    profileFields.user = req.user.id;
    if (req.body.handle) {
        profileFields.handle = req.body.handle;
    }

    if (req.body.company) {
        profileFields.company = req.body.company;
    }

    if (req.body.website) {
        profileFields.website = req.body.website;
    }

    if (req.body.location) {
        profileFields.location = req.body.location;
    }

    if (req.body.bio) {
        profileFields.bio = req.body.bio;
    }

    if (req.body.status) {
        profileFields.status = req.body.status;
    }

    if (req.body.githubusername) {
        profileFields.githubusername = req.body.githubusername;
    }

    // Skills - Split into array
    if (typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) {
        profileFields.social.youtube = req.body.youtube;
    }

    if (req.body.twitter) {
        profileFields.social.twitter = req.body.twitter;
    }

    if (req.body.facebook) {
        profileFields.social.facebook = req.body.facebook;
    }

    if (req.body.linkedin) {
        profileFields.social.linkedin = req.body.linkedin;
    }

    if (req.body.instagram) {
        profileFields.social.instagram = req.body.instagram;
    }

    // @ts-ignore
    findProfileByUserIdService(profileModel, req.user.id).then((profile) => {
        if (profile) {
            // @ts-ignore
            updateProfileByUserIdService(profileModel, req.user.id, profileFields).then((profile) =>
                res.status(200).json(profile)
            );
        } else {
            // Create and Check if handle exists
            checkIfHandleExistsService(profileModel, profileFields.handle).then((profile) => {
                if (profile) {
                    errors.handle = 'That handle already exists';
                    res.status(400).json(errors);
                }

                // Save Profile
                saveProfileService(new profileModel(profileFields)).then((profile) =>
                    res.status(200).json(profile)
                );
            });
        }
    });
};

export const addExperienceToProfileCtrl = (req: Request, res: Response) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    // Check validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // @ts-ignore
    findProfileByReqUserIdService(profileModel, req.user.id).then((profile) => {
        const newExp = {
            title: req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description,
        };

        // To to exp array
        profile.experience.unshift(newExp);

        profile.save().then((profile: any) => res.json(profile));
    });
};

export const addEducationToProfileCtrl = (req: Request, res: Response) => {
    const { errors, isValid } = validateEducationInput(req.body);

    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // @ts-ignore
    findProfileByReqUserIdService(profileModel, req.user.id).then((profile) => {
        const newEdu = {
            school: req.body.school,
            degree: req.body.degree,
            fieldofstudy: req.body.fieldofstudy,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description,
        };

        // Add to exp array
        profile.education.unshift(newEdu);
        profile.save().then((profile: any) => res.json(profile));
    });
};

export const deleteExperienceFromProfileCtrl = (req: Request, res: Response) => {
    // @ts-ignore
    findProfileByReqUserIdService(profileModel, req.user.id)
        .then((profile) => {
            // Get remove index
            const removeIndex = profile.experience
                .map((item: any) => item.id)
                .indexOf(req.params.exp_id);

            // Splice out of array
            profile.experience.splice(removeIndex, 1);

            // Save
            profile.save().then((profile: any) => res.json(profile));
        })
        .catch((err) => res.status(404).json(err));
};

export const deleteEducationFromProfileCtrl = (req: Request, res: Response) => {
    // @ts-ignore
    findProfileByReqUserIdService(profileModel, req.user.id)
        .then((profile) => {
            // Get remove index
            const removeIndex = profile.education
                .map((item: any) => item.id)
                .indexOf(req.params.edu_id);

            // Splice out of array
            profile.education.splice(removeIndex, 1);

            // Save
            profile.save().then((profile: any) => res.json(profile));
        })
        .catch((err) => res.status(404).json(err));
};

export const deleteUserFromUserIdCtrl = (req: Request, res: Response) => {
    // @ts-ignore
    findOneAndRemoveProfileService(profileModel, req.user.id).then(() => {
        // @ts-ignore
        findOneAndRemoveUserService(userModel, req.user.id).then(() => {
            res.json({ success: true });
        });
    });
};
