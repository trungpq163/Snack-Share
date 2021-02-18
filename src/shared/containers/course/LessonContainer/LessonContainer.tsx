import * as React from 'react';

import Lesson from 'components/course/Lesson/Lesson';

const LessonContainer = ({ lecture, idCourse }: any) => {
    return <Lesson lecture={lecture} idCourse={idCourse} />;
};

export default LessonContainer;
