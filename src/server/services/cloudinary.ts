export const uploadImageService = async (
    cloudinary: any,
    reqBodyImage: any,
    config: any,
    cb: Function
) => {
    return await cloudinary.uploader.upload(reqBodyImage, config, cb);
};
