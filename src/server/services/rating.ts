export const findRatingByUserAndCourseService = async (
    rating: any,
    reqBodyUser: string,
    reqBodyCourse: string
) => {
    return await rating.findOne({
        user: reqBodyUser,
        course: reqBodyCourse,
    });
};

export const saveRatingService = async (rating: any) => {
    return await rating.save();
};

export const findRatingByCourse = async (rating: any, reqQueryCourse: string) => {
    return rating.find({ course: reqQueryCourse });
};
