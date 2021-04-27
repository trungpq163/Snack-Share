import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getCourses } from '../../../store/courses/selectors';
import { getAllCourses } from '../../../store/courses/effects';
import { getCategory as getCategoryEff } from '../../../store/category/effects';
import { getCategory } from '../../../store/category/selectors';

import EditCourseContainer from '../../../containers/manage/EditCourseContainer/EditCourseContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const EditCourse = () => {
    const dispatch = useDispatch();
    const courses = useSelector(getCourses);
    const category = useSelector(getCategory);
    const location = useLocation();
    const { t } = useTranslation();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        dispatch(getAllCourses());
        dispatch(getCategoryEff());
    }, [dispatch]);

    const pathName = location?.pathname || '';
    const pathNameHandle = pathName.split('/edit-course/').join('');
    const course = courses.courses?.find((x: any, _index: number) => pathName?.includes(x?._id));

    return (
        <>
            <PageHeader title={`${t('breadcrumb.editCourse')}`} />
            {courses?.loading || category.loading ? (
                <CircleLoader />
            ) : (
                <EditCourseContainer
                    pathname={pathNameHandle}
                    course={course}
                    category={category.category}
                />
            )}
        </>
    );
};

export default EditCourse;
