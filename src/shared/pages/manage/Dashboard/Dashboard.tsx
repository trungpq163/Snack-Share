/* eslint-disable prefer-const */
import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import { getCourses } from '../../../store/courses/selectors';
import { getEnrollments as getEnrolls } from '../../../store/enrollment/selectors';
import { getAllCourses as getAllCoursesEff } from '../../../store/courses/effects';
import { getAllEnrollments as getAllEnrollmentsEff } from '../../../store/enrollment/effects';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import DashboardContainer from '../../../containers/manage/DashboardContainer/DashboardContainer';

const Dashboard = () => {
    const dispatch = useDispatch();
    const getAllCourses = useSelector(getCourses);
    const getAllEnrollments = useSelector(getEnrolls);
    const { t } = useTranslation();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        dispatch(getAllCoursesEff());
        dispatch(getAllEnrollmentsEff());
    }, [dispatch]);

    let dict: any = {};
    let dict2: any = {};
    let dict3: any = {};
    let coursesPerInstructor = [];
    let coursesPerCategory = [];
    let studentsPerCourse = [];

    (getAllCourses.courses || []).forEach((x: any) => {
        if (dict[x.instructor.email] === undefined) {
            dict[x.instructor.email] = 1;
        } else {
            dict[x.instructor.email] += 1;
        }
    });

    for (let k in dict) {
        // eslint-disable-next-line security/detect-object-injection
        coursesPerInstructor.push({ data: dict[k], label: k });
    }

    (getAllCourses.courses || []).forEach((x: any) => {
        if (dict2[x.category.categoryName] === undefined) {
            dict2[x.category.categoryName] = 1;
        } else {
            dict2[x.category.categoryName] += 1;
        }
    });

    for (let k in dict2) {
        // eslint-disable-next-line security/detect-object-injection
        coursesPerCategory.push({ data: dict2[k], label: k });
    }

    (getAllEnrollments.enrollments || []).forEach((x: any) => {
        if (dict3[x.course.courseName] === undefined) {
            dict3[x.course.courseName] = 1;
        } else {
            dict3[x.course.courseName] += 1;
        }
    });

    for (let k in dict3) {
        // eslint-disable-next-line security/detect-object-injection
        studentsPerCourse.push({ data: dict3[k], label: k });
    }

    const data = coursesPerInstructor.map((course) => course.data);
    const data2 = coursesPerCategory.map((course) => course.data);
    const data3 = studentsPerCourse.map((student) => student.data);
    const labels = coursesPerInstructor.map((course) => course.label);
    const labels2 = coursesPerCategory.map((course) => course.label);
    const labels3 = studentsPerCourse.map((student) => student.label);

    return (
        <>
            <PageHeader title={`${t('breadcrumb.dashboard')}`} />
            {getAllCourses.loading ? (
                <CircleLoader />
            ) : (
                <DashboardContainer
                    data={data}
                    labels={labels}
                    data2={data2}
                    labels2={labels2}
                    data3={data3}
                    labels3={labels3}
                />
            )}
        </>
    );
};

export default Dashboard;
