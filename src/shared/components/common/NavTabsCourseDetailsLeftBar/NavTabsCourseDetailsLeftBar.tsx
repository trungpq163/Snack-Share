import * as React from 'react';

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
    return (
        <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
            <li>
                <a className={isOverviewNavTabsClass} role="tab" data-toggle="tab" href="#overview">
                    Overview
                </a>
            </li>
            <li>
                <a
                    className={isCurriculumNavTabsClass}
                    role="tab"
                    data-toggle="tab"
                    href="#curriculum"
                >
                    Curriculum
                </a>
            </li>
            <li>
                <a className={isReviewNavTabsClass} role="tab" data-toggle="tab" href="#review">
                    Reviews
                </a>
            </li>
        </ul>
    );
};

export default NavTabsCourseDetailsLeftBar;
