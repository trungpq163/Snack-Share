export const getCurrentUserProfileService = async (profile: any, reqUserId: string) => {
    return await profile
        .findOne({
            user: reqUserId,
        })
        .populate('user', ['name', 'avatar']);
};

export const getAllProfilesService = async (profile: any) => {
    return await profile.find().populate('user', ['name', 'avatar']);
};

export const getProfileByHandleService = async (profile: any, reqParamsHandle: string) => {
    return await profile
        .findOne({
            handle: reqParamsHandle,
        })
        .populate('user', ['name', 'avatar']);
};

export const getProfileByUserIdService = async (profile: any, reqParamsUserId: string) => {
    return await profile
        .findOne({
            user: reqParamsUserId,
        })
        .populate('user', ['name', 'avatar']);
};

export const findProfileByUserIdService = async (profile: any, reqUserId: string) => {
    return await profile.findOne({
        user: reqUserId,
    });
};

export const updateProfileByUserIdService = async (
    profile: any,
    reqUserId: string,
    profileFields: any
) => {
    return await profile.findOneAndUpdate(
        {
            user: reqUserId,
        },
        { $set: profileFields },
        { new: true }
    );
};

// Create and Check if handle exists
export const checkIfHandleExistsService = async (profile: any, handleProfileFields: any) => {
    return await profile.findOne({
        handle: handleProfileFields,
    });
};

// Save profile
export const saveProfileService = async (profile: any) => {
    return await profile.save();
};

export const findProfileByReqUserIdService = async (profile: any, reqUserId: string) => {
    return await profile.findOne({
        user: reqUserId,
    });
};

export const findOneAndRemoveProfileService = async (profile: any, reqUserId: string) => {
    return await profile.findOneAndRemove({
        user: reqUserId,
    });
};

export const findOneAndRemoveUserService = async (user: any, reqUserId: string) => {
    return await user.findOneAndRemove({
        _id: reqUserId,
    });
};
