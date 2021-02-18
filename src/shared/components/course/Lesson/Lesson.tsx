import * as React from 'react';
import { Link } from 'react-router-dom';

const Lesson = ({ lecture, idCourse }: any) => {
    return (
        <section className="course-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="course-details__content">
                            <h2 className="team-details__title">{lecture?.title}</h2>
                            <iframe
                                width="100%"
                                height="500px"
                                src={lecture?.videoLink}
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-details__price">
                            <Link
                                to={`/courses/${idCourse}`}
                                className="thm-btn course-details__price-btn"
                            >
                                Next Lesson
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lesson;
