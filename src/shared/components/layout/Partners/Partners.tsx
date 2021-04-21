import React from 'react';
import Swiper from 'react-id-swiper';

import { useTranslation } from 'react-i18next';

import { studentWorkAt } from '../../../utils/imageURL';

import './Partners.Styles.css';

const Partners = () => {
    const { t } = useTranslation();
    const params = {
        slidesPerView: 5,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        // Responsive breakpoints
        breakpoints: {
            1024: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 4,
            },
            640: {
                slidesPerView: 3,
            },
            320: {
                slidesPerView: 2,
            },
        },
    };

    return (
        <section className="brand-two">
            <div className="container">
                <div className="block-title">
                    <h2 className="block-title__title">{t('home.ourStudent')}</h2>
                </div>
                <div className="brand-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <img src={studentWorkAt().directiLogo} alt="" />
                        </div>
                        <div className="item">
                            <img src={studentWorkAt().gojekLogo} alt="" />
                        </div>
                        <div className="item">
                            <img src={studentWorkAt().makeMyTripLogo} alt="" />
                        </div>
                        <div className="item">
                            <img src={studentWorkAt().microsoftLogo} alt="" />
                        </div>
                        <div className="item">
                            <img src={studentWorkAt().paytmLogo} alt="" />
                        </div>
                        <div className="item">
                            <img src={studentWorkAt().swiggyLogo} alt="" />
                        </div>
                        <div className="item">
                            <img src={studentWorkAt().zomatoLogo} alt="" />
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Partners;
