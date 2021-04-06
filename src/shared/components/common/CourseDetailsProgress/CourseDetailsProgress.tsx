import * as React from 'react';

const CourseDetailsProgress = () => {
    return (
        <>
            <div className="col-xl-7 d-flex">
                <div className="course-details__progress my-auto">
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">Excellent</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '100%' }} />
                        </div>
                        <p className="course-details__progress-count">5</p>
                    </div>
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">Very Good</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '80%' }} />
                        </div>
                        <p className="course-details__progress-count">4</p>
                    </div>
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">Average</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '60%' }} />
                        </div>
                        <p className="course-details__progress-count">3</p>
                    </div>
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">Poor</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '40%' }} />
                        </div>
                        <p className="course-details__progress-count">2</p>
                    </div>
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">Terrible</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '20%' }} />
                        </div>
                        <p className="course-details__progress-count">1</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetailsProgress;
