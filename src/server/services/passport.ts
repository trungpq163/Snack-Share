export const findUserByIdService = async (user: any, jwtPayloadId: string) => {
    return await user.findById(jwtPayloadId);
};
