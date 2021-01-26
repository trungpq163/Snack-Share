export const getLecturesService = async (lecture: any, reqQueryId: string) => {
    return await lecture
        .find({
            course: reqQueryId,
        })
        .populate({ path: 'course', model: 'courses', select: 'courseDescription' });
};

export const saveLectureService = async (lecture: any) => {
    return await lecture.save();
};
