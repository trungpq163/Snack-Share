import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    isOverviewNavTabsClass: string;
    isCurriculumNavTabsClass: string;
    isReviewNavTabsClass: string;
}

const NavTabsCourseDetailsLeftBar = ({
    isCurriculumNavTabsClass,
    isOverviewNavTabsClass,
    isReviewNavTabsClass,
}: Props) => {
    const { t } = useTranslation();
    return (
        <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
            <li>
                <a className={isOverviewNavTabsClass} role="tab" data-toggle="tab" href="#overview">
                    {t('allCourses.overview')}
                </a>
            </li>
            <li>
                <a
                    className={isCurriculumNavTabsClass}
                    role="tab"
                    data-toggle="tab"
                    href="#curriculum"
                >
                    {t('allCourses.curriculum')}
                </a>
            </li>
            <li>
                <a className={isReviewNavTabsClass} role="tab" data-toggle="tab" href="#review">
                    {t('allCourses.reviews')}
                </a>
            </li>
        </ul>
    );
};

export default NavTabsCourseDetailsLeftBar;
