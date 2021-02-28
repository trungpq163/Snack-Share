import * as React from 'react';

interface Props {
    isCurriculumContentClass: string;
}

const CurriculumCourseDetails = ({ isCurriculumContentClass }: Props) => {
    return (
        <div className={isCurriculumContentClass} role="tabpanel" id="curriculum">
            <h3 className="course-details__tab-title">Starting beginners level course</h3>
            <br />
            <p className="course-details__tab-text">
                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit Lorem Ipsum is
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since.
            </p>
            <br />
            <ul className="course-details__curriculum-list list-unstyled">
                <li>
                    <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                            <i className="fas fa-play" />
                        </div>
                        <a href="#none">Introduction to Editing</a> <span>Preview</span>
                    </div>
                    <div className="course-details__curriculum-list-right">16 minutes</div>
                </li>
                <li>
                    <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                            <i className="fas fa-play" />
                        </div>
                        <a href="#none">Overview of Editing</a> <span>Preview</span>
                    </div>
                    <div className="course-details__curriculum-list-right">10 minutes</div>
                </li>
                <li>
                    <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon file-icon">
                            <i className="fas fa-folder" />
                        </div>
                        <a href="#none">Basic Editing Technology</a>
                    </div>
                </li>
                <li>
                    <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon quiz-icon">
                            <i className="fas fa-comment" />
                        </div>
                        <a href="#none">Quiz</a>
                    </div>
                    <div className="course-details__curriculum-list-right">6 questions</div>
                </li>
            </ul>
            <br />
            <br />
            <h3 className="course-details__tab-title">Intermediate Level</h3>
            <br />
            <p className="course-details__tab-text">
                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit Lorem Ipsum is
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since.
            </p>
            <br />
            <ul className="course-details__curriculum-list list-unstyled">
                <li>
                    <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                            <i className="fas fa-play" />
                        </div>
                        <a href="#none">Introduction to Editing</a>
                        <span>Preview</span>
                    </div>
                    <div className="course-details__curriculum-list-right">16 minutes</div>
                </li>
                <li>
                    <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon file-icon">
                            <i className="fas fa-folder" />
                        </div>
                        <a href="#none">Basic Editing Technology</a>
                    </div>
                </li>
                <li>
                    <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon quiz-icon">
                            <i className="fas fa-comment" />
                        </div>
                        <a href="#none">Quiz</a>
                    </div>
                    <div className="course-details__curriculum-list-right">6 questions</div>
                </li>
            </ul>
        </div>
    );
};

export default CurriculumCourseDetails;
