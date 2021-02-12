import React from 'react';
import Swiper from 'react-id-swiper';

import { useTranslation } from 'react-i18next';
import img1 from '../../../assets/images/logo-directi.png';
import img2 from '../../../assets/images/logo-gojek.png';
import img3 from '../../../assets/images/logo-make-my-trip.png';
import img4 from '../../../assets/images/logo-microsoft.png';
import img5 from '../../../assets/images/logo-paytm.png';
import img6 from '../../../assets/images/logo-swiggy.png';
import img7 from '../../../assets/images/logo-zomato.png';

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
                            <img src={img1} alt="" />
                        </div>
                        <div className="item">
                            <img src={img2} alt="" />
                        </div>
                        <div className="item">
                            <img src={img3} alt="" />
                        </div>
                        <div className="item">
                            <img src={img4} alt="" />
                        </div>
                        <div className="item">
                            <img src={img5} alt="" />
                        </div>
                        <div className="item">
                            <img src={img6} alt="" />
                        </div>
                        <div className="item">
                            <img src={img7} alt="" />
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Partners;
