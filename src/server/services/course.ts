/* eslint-disable prefer-const */
// .aggregate([
//     {
//         $lookup: {
//             from: 'ratings',
//             localField: '_id',
//             foreignField: 'course',
//             as: 'ratingsData',
//         },
//     },
// ])
export const addCourseService = async (category: any, reqBodyCategory: any, cb: Function) => {
    return await category.find(
        {
            categoryName: reqBodyCategory,
        },
        cb
    );
};

export const saveAddCourseService = async (course: any) => {
    return await course.save();
};

export const getCoursesService = async (course: any, cb: Function) => {
    return await course
        .aggregate([
            {
                $lookup: {
                    from: 'ratings',
                    localField: '_id',
                    foreignField: 'course',
                    as: 'ratings',
                },
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category',
                    foreignField: '_id',
                    as: 'category',
                },
            },
            { $unwind: '$category' },
            {
                $lookup: {
                    from: 'users',
                    localField: 'instructor',
                    foreignField: '_id',
                    as: 'instructor',
                },
            },
            { $unwind: '$instructor' },
        ])
        .exec(cb);
};

export const getCourseService = async (course: any, reqQueryId: string) => {
    return await course.findOne({
        _id: reqQueryId,
    });
};

export const getCourseByInstructorIdService = async (
    course: any,
    reqQueryId: string,
    cb: Function
) => {
    return await course
        .find({ instructor: reqQueryId })
        .populate({ path: 'category', model: 'category' })
        .populate({ path: 'instructor', model: 'users' })
        .exec(cb);
};

export const updateCourseService = async (
    course: any,
    reqQueryId: string,
    reqBody: any,
    option: any
) => {
    return await course.findOneAndUpdate(
        {
            _id: reqQueryId,
        },
        reqBody,
        option
    );
};

export const deleteCourseService = async (course: any, reqQueryId: string) => {
    return await course.findOneAndRemove({
        _id: reqQueryId,
    });
};
