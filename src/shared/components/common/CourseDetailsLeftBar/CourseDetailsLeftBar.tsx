import * as React from 'react';
import { useLocation } from 'react-router';
import CourseDetailsAuthor from '../CourseDetailsAuthor/CourseDetailsAuthor';
import CourseDetailsImage from '../CourseDetailsImage/CourseDetailsImage';
import CourseDetailsTop from '../CourseDetailsTop/CourseDetailsTop';
import NavTabsCourseDetailsLeftBar from '../NavTabsCourseDetailsLeftBar/NavTabsCourseDetailsLeftBar';
import ContentCourseDetailsLeftBar from '../ContentCourseDetailsLeftBar/ContentCourseDetailsLeftBar';

interface Props {
    firstName: string;
    lastName: string;
    avt: string;
    courseName: string;
    categoryName: string;
    image: string;
    courseDescription: string;
    team2: string;
    idInstructor: any;
    ratings: any;
}

const CourseDetailsLeftBar = ({
    firstName,
    lastName,
    avt,
    courseName,
    categoryName,
    image,
    courseDescription,
    team2,
    idInstructor,
    ratings,
}: Props) => {
    const location = useLocation();
    const hashTag = location.hash;

    const isOverview = hashTag === '#overview' || hashTag.length === 0;
    const isCurriculum = hashTag === '#curriculum';
    const isReview = hashTag === '#review';

    const isOverviewNavTabsClass = isOverview === true ? 'active' : '';
    const isCurriculumNavTabsClass = isCurriculum === true ? 'active' : '';
    const isReviewNavTabsClass = isReview === true ? 'active' : '';

    const isOverviewContentClass =
        isOverview === true
            ? 'tab-pane show active animated fadeInUp'
            : 'tab-pane animated fadeInUp';

    const isCurriculumContentClass =
        isCurriculum === true
            ? 'tab-pane show active animated fadeInUp'
            : 'tab-pane animated fadeInUp';

    const isReviewContentClass =
        isReview === true ? 'tab-pane show active animated fadeInUp' : 'tab-pane animated fadeInUp';

    console.log('hashtag', isOverview);

    return (
        <div className="col-lg-8">
            <div className="course-details__content">
                <CourseDetailsAuthor
                    firstName={firstName}
                    lastName={lastName}
                    avt={avt}
                    idInstructor={idInstructor}
                />
                <CourseDetailsTop courseName={courseName} categoryName={categoryName} />
                <CourseDetailsImage image={image} />
                <NavTabsCourseDetailsLeftBar
                    isCurriculumNavTabsClass={isCurriculumNavTabsClass}
                    isOverviewNavTabsClass={isOverviewNavTabsClass}
                    isReviewNavTabsClass={isReviewNavTabsClass}
                />
                <ContentCourseDetailsLeftBar
                    avt={avt}
                    courseDescription={courseDescription || ''}
                    isCurriculumContentClass={isCurriculumContentClass}
                    isOverviewContentClass={isOverviewContentClass}
                    isReviewContentClass={isReviewContentClass}
                    team2={team2}
                    ratings={ratings}
                />
            </div>
        </div>
    );
};

export default CourseDetailsLeftBar;
