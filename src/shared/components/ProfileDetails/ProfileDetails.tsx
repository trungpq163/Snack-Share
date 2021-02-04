import * as React from 'react';
import { Link } from 'react-router-dom';
import certificate1 from '../../assets/images/certificate-1-1.png';
import certificate2 from '../../assets/images/certificate-1-2.png';
import teamd1 from '../../assets/images/avt.jpg';

import { Auth } from '../../store/auth/types';
import { Profile } from '../../store/profile/types';

import './ProfileDetails.Styles.css';

interface Props {
    auth?: Auth;
    profile?: Profile;
    name?: string;
}

const ProfileDetails = ({ auth, profile, name }: Props) => {
    return (
        <section className="team-details">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="team-details__content">
                            <h2 className="team-details__title">{name}</h2>
                            {profile?.profile === null ? (
                                <div>
                                    <Link to="#dosomething" className="team-details__link">
                                        Edit Profile
                                    </Link>
                                    {' / '}
                                    <Link to="#dosomething" className="team-details__link">
                                        Add Experience
                                    </Link>
                                    {' / '}
                                    <Link to="#dosomething" className="team-details__link">
                                        Add Education
                                    </Link>
                                    <p className="team-details__text mt-3">
                                        Lorem Ipsum is simply dummy text of the printing and type
                                        industry. Lorem Ipsum has been the standard dummy text ever
                                        since the when an unknown was popularised. It has survived
                                        not only five centuries, but also the leap into electronic
                                        typesetting remaining unchanged.
                                    </p>
                                    <h3 className="team-details__subtitle">Certificate</h3>
                                    <ul className="list-unstyled team-details__certificate-list">
                                        <li>
                                            <img src={certificate1} alt="" />
                                        </li>
                                        <li>
                                            <img src={certificate2} alt="" />
                                        </li>
                                    </ul>

                                    <div className="progress-one__wrap">
                                        <div className="progress-one__single">
                                            <div className="progress-one__top">
                                                <h3 className="progress-one__title">English</h3>
                                                <h3 className="progress-one__percent">
                                                    <span className="counter">98</span>%
                                                </h3>
                                            </div>
                                            <div className="progress-one__bar">
                                                <span
                                                    style={{ width: '98%' }}
                                                    className="wow slideInLeft"
                                                />
                                            </div>
                                        </div>
                                        <div className="progress-one__single">
                                            <div className="progress-one__top">
                                                <h3 className="progress-one__title">French</h3>
                                                <h3 className="progress-one__percent">
                                                    <span className="counter">64</span>%
                                                </h3>
                                            </div>
                                            <div className="progress-one__bar">
                                                <span
                                                    style={{ width: '64%' }}
                                                    className="wow slideInLeft"
                                                />
                                            </div>
                                        </div>
                                        <div className="progress-one__single">
                                            <div className="progress-one__top">
                                                <h3 className="progress-one__title">Spanish</h3>
                                                <h3 className="progress-one__percent">
                                                    <span className="counter">34</span>%
                                                </h3>
                                            </div>
                                            <div className="progress-one__bar">
                                                <span
                                                    style={{ width: '34%' }}
                                                    className="wow slideInLeft"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    No profile here,{' '}
                                    <Link to="#dosomething" className="team-details__link">
                                        create now!
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src={teamd1} alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name">
                                    <a href="/team-details">{name}</a>
                                </h2>
                                <p className="team-one__designation">Teacher</p>
                            </div>
                            <div className="team-one__social">
                                <a href="#none">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#none">
                                    <i className="fab fa-facebook-square" />
                                </a>
                                <a href="#none">
                                    <i className="fab fa-pinterest-p" />
                                </a>
                                <a href="#none">
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileDetails;
