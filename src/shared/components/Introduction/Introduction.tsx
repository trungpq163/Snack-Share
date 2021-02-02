import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './Introduction.Styles.css';

const Introduction = () => {
    const [startCounter, setStartCounter] = useState(false);

    const onVisibilityChange = (isVisible: any) => {
        if (isVisible) {
            setStartCounter(true);
        }
    };

    return (
        <section className="about-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-two__content">
                            <div className="block-title text-left">
                                <h2 className="block-title__title">
                                    Welcome to online <br />
                                    learning center
                                </h2>
                            </div>
                            <p className="about-two__text">
                                There are many variations of passages of lorem ipsum available but
                                the majority have suffered alteration in some form by injected
                                humour or randomised words which dont look.
                            </p>
                            <div className="about-two__single-wrap">
                                <div className="about-two__single">
                                    <div className="about-two__single-icon">
                                        <i className="fad fa-graduation-cap" />
                                    </div>
                                    <div className="about-two__single-content">
                                        <p className="about-two__single-text">
                                            Start learning from our experts
                                        </p>
                                    </div>
                                </div>
                                <div className="about-two__single">
                                    <div className="about-two__single-icon">
                                        <i className="fad fa-lightbulb-on" />
                                    </div>
                                    <div className="about-two__single-content">
                                        <p className="about-two__single-text">
                                            Enhance your skills with us now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="#none" className="thm-btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
                        <div className="about-two__image">
                            <span className="about-two__image-dots" />
                            <img
                                style={{
                                    borderRadius: '100% !important',
                                }}
                                src="https://picsum.photos/1000/1000"
                                alt=""
                            />
                            <div className="about-two__count">
                                <div className="about-two__count-text">
                                    Trusted by
                                    <span className="counter">
                                        <VisibilitySensor
                                            onChange={onVisibilityChange}
                                            offset={{ top: 10 }}
                                            delayedCall
                                        >
                                            <CountUp end={startCounter ? 4890 : 0} />
                                        </VisibilitySensor>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
