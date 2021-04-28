export const findUserByEmailService = async (user: any, reqBodyEmail: string) => {
    return await user.findOne({
        email: reqBodyEmail,
    });
};

export const saveUserService = async (user: any) => {
    return await user.save();
};

export const findAllUsersService = async (user: any) => {
    return await user.find();
};

export const findAllStudentsService = async (user: any) => {
    return await user.find({ role: 'student' });
};

export const findUserByQueryIdService = async (user: any, reqQueryId: string) => {
    return await user.findOne({
        _id: reqQueryId,
    });
};

export const findUserAndUpdateByIdService = async (
    user: any,
    reqQueryId: string,
    reqBody: any,
    option: any
) => {
    return await user.findOneAndUpdate(
        {
            _id: reqQueryId,
        },
        reqBody,
        option
    );
};

export const findAndRemoveUserById = async (user: any, reqQueryId: string) => {
    return await user.findOneAndRemove({
        _id: reqQueryId,
    });
};
