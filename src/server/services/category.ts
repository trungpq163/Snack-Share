export const addCategoryService = async (category: any) => {
    return await category.save();
};

export const getCategoryService = async (category: any, reqQueryId: any) => {
    return await category.findOne({
        _id: reqQueryId,
    });
};

export const updateCategoryService = async (
    category: any,
    reqQueryId: any,
    reqBody: any,
    option: any
) => {
    return await category.findOneAndUpdate(
        {
            _id: reqQueryId,
        },
        reqBody,
        option
    );
};

export const getCategoriesService = async (category: any) => {
    return await category.find();
};
