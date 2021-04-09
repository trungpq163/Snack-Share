export const getEnrollmentsService = async (enrollment: any, cb: Function) => {
    return await enrollment
        .aggregate([
            {
                $lookup: {
                    from: 'ratings',
                    localField: 'course',
                    foreignField: 'course',
                    as: 'ratings',
                },
            },
            {
                $lookup: {
                    from: 'courses',
                    localField: 'course',
                    foreignField: '_id',
                    as: 'course',
                },
            },
            { $unwind: '$course' },
            {
                $lookup: {
                    from: 'users',
                    localField: 'course.instructor',
                    foreignField: '_id',
                    as: 'course.instructor',
                },
            },
            { $unwind: '$course.instructor' },
            {
                $lookup: {
                    from: 'users',
                    localField: 'student',
                    foreignField: '_id',
                    as: 'student',
                },
            },
            { $unwind: '$student' },
        ])
        .exec(cb);
};

export const getEnrollmentByStudentService = async (enrollment: any, reqQueryId: string) => {
    return await enrollment
        .find({
            student: reqQueryId,
        })
        .populate({ path: 'course', model: 'courses' });
};

export const getCheckEnrollmentService = async (
    enrollment: any,
    reqQueryId: string,
    reqQueryCourseId: string
) => {
    return await enrollment
        .findOne({
            student: reqQueryId,
            course: reqQueryCourseId,
        })
        .populate({ path: 'course', model: 'courses', select: 'courseName' });
};

export const findUserByEmailService = async (user: any, reqBodyStudent: string, cb: Function) => {
    return await user.find(
        {
            email: reqBodyStudent,
        },
        cb
    );
};

export const findCourseByNameService = async (course: any, reqBodyCourse: string, cb: Function) => {
    return await course.find(
        {
            courseName: reqBodyCourse,
        },
        cb
    );
};

export const updateEnrollmentByIdService = async (
    enrollment: any,
    reqQueryId: string,
    reqBody: any,
    option: any
) => {
    return await enrollment.findOneAndUpdate(
        {
            _id: reqQueryId,
        },
        reqBody,
        option
    );
};

export const saveEnrollmentService = async (enrollment: any) => {
    return await enrollment.save();
};

export const deleteEnrollmentService = async (enrollment: any, reqQueryId: string) => {
    return await enrollment.findOneAndRemove({
        _id: reqQueryId,
    });
};
