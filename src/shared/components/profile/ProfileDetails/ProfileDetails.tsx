import * as React from 'react';
import { Link } from 'react-router-dom';

import returnSocial from '../../../utils/returnSocial';
import teamd1 from '../../../assets/images/avt.jpg';

import { Auth } from '../../../store/auth/types';

import routes from '../../../routes';

import './ProfileDetails.Styles.css';

interface Props {
    auth?: Auth;
    profile?: any;
    name?: string;
}

const ProfileDetails = ({ auth, profile, name }: Props) => {
    return (
        <section className="team-details">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="team-details__content">
                            <h2 className="team-details__title">{profile?.handle || name}</h2>
                            {profile?.res === 'There is no profile for this user' ? (
                                <div>
                                    No profile here,{' '}
                                    <Link to={routes.createprofile} className="team-details__link">
                                        create now!
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Link to={routes.editprofile} className="team-details__link">
                                        Edit Profile
                                    </Link>
                                    {' / '}
                                    <Link to={routes.addexperience} className="team-details__link">
                                        Add Experience
                                    </Link>
                                    {' / '}
                                    <Link to={routes.addeducation} className="team-details__link">
                                        Add Education
                                    </Link>
                                    <p className="mt-2">{profile?.bio}</p>
                                    <h1
                                        className="team-details__subtitle"
                                        style={{ marginBottom: '0.5rem' }}
                                    >
                                        Education
                                    </h1>
                                    School: {profile?.education[0]?.school || ''} <br />
                                    Degree: {profile?.education[0]?.degree || ''} <br />
                                    Field of Study: {profile?.education[0]?.fieldofstudy || ''}{' '}
                                    <br />
                                    Status: {profile?.education[0]?.current || ''} <br />
                                    From: {profile?.education[0]?.from || ''} <br />
                                    <h1
                                        className="team-details__subtitle"
                                        style={{ marginBottom: '0.5rem' }}
                                    >
                                        Experience
                                    </h1>
                                    Company: {profile?.experience[0]?.company || ''} <br />
                                    Job: {profile?.experience[0]?.title || ''} <br />
                                    Status:
                                    {profile?.experience[0]?.current ? 'Working' : ''} <br />
                                    From: {profile?.experience[0]?.from || ''} <br />
                                    Location: {profile?.experience[0]?.location || ''} <br />
                                    <h1 className="team-details__subtitle">Skills</h1>
                                    <div className="progress-one__wrap">
                                        {profile?.skills?.map((skill: any, index: any) => (
                                            <div className="progress-one__single" key={index}>
                                                <div className="progress-one__top">
                                                    <h3 className="progress-one__title">{skill}</h3>
                                                    <h3 className="progress-one__percent">
                                                        <span className="counter">66.6</span>%
                                                    </h3>
                                                </div>
                                                <div className="progress-one__bar">
                                                    <span
                                                        style={{ width: '66.6%' }}
                                                        className="wow slideInLeft"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
                                    <a href="/team-details"> {profile?.handle || name}</a>
                                </h2>
                                <p className="team-one__designation">
                                    {profile?.status || auth?.users?.role || '.........'}
                                </p>
                            </div>
                            <div className="team-one__social">
                                {Object.values(profile?.social || {}).map((item: any, index) => (
                                    <a href={item} key={index}>
                                        <i className={`fab fa-${returnSocial(item || '')}`} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileDetails;
