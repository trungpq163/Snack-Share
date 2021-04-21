import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './Introduction.Styles.css';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const [startCounter, setStartCounter] = useState(false);
    const { t } = useTranslation();

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
                                    {/* Welcome to online <br />
                                    learning center */}
                                    {t('home.titleIntro')}
                                </h2>
                            </div>
                            <p className="about-two__text">
                                There are many variations of passages of lorem ipsum available but
                                the majority have suffered alteration in some form by injected
                                humour or randomised words which dont look.
                                {/* {t('home.contentTitleIntro')} */}
                            </p>
                            <div className="about-two__single-wrap">
                                <div className="about-two__single">
                                    <div className="about-two__single-icon">
                                        <i className="fad fa-graduation-cap" />
                                    </div>
                                    <div className="about-two__single-content">
                                        <p className="about-two__single-text">
                                            {t('home.titleIntro2')}
                                        </p>
                                    </div>
                                </div>
                                <div className="about-two__single">
                                    <div className="about-two__single-icon">
                                        <i className="fad fa-lightbulb-on" />
                                    </div>
                                    <div className="about-two__single-content">
                                        <p className="about-two__single-text">
                                            {t('home.titleIntro3')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="#none" className="thm-btn">
                                {t('home.titleButton')}
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
                                src="https://res.cloudinary.com/snack-dev/image/upload/v1618979787/intro/dlu_university_fjqlfk.jpg"
                                alt=""
                            />
                            <div className="about-two__count">
                                <div className="about-two__count-text">
                                    {t('home.trustBy')}
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
