import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LessonContainer from 'containers/course/LessonContainer/LessonContainer';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import { getLecturesById } from 'store/lectures/effects';
import { getLectures } from 'store/lectures/selectors';
import { getCourses } from 'store/courses/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const Lesson = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const pathName = location?.pathname || '';
    const id = pathName.split('/courses/').join('');
    const idCourse = id.split('/lessons/')[0];
    const idLesson = id.split('/lessons/')[1];

    React.useEffect(() => {
        dispatch(getLecturesById(idCourse));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCourse]);

    const lectures = useSelector(getLectures);
    const courses = useSelector(getCourses);
    // @ts-ignore
    const course = courses?.courses?.find((x) => x?._id === idCourse);
    // @ts-ignore
    const lecture = lectures?.lectures?.find((x) => x?._id === idLesson);

    console.log('lecture', lecture);

    return (
        <>
            <PageHeader title={course?.courseName} loading={courses?.loading} />
            {lectures.loading ? (
                <CircleLoader />
            ) : (
                <LessonContainer lecture={lecture} idCourse={idCourse} />
            )}
        </>
    );
};

export default Lesson;
