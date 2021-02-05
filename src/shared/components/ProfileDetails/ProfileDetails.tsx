import * as React from 'react';
import { Link } from 'react-router-dom';
import teamd1 from '../../assets/images/avt.jpg';

import { Auth } from '../../store/auth/types';
import { Profile } from '../../store/profile/types';

import routes from '../../routes';

import './ProfileDetails.Styles.css';

interface Props {
    auth?: Auth;
    profile?: Profile;
    name?: string;
}

const ProfileDetails = ({ auth, profile, name }: Props) => {
    console.log(profile);
    return (
        <section className="team-details">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="team-details__content">
                            <h2 className="team-details__title">
                                {profile?.profile?.handle || name}
                            </h2>
                            {profile?.profile?.res === 'There is no profile for this user' ? (
                                <div>
                                    No profile here,{' '}
                                    <Link to={routes.createprofile} className="team-details__link">
                                        create now!
                                    </Link>
                                </div>
                            ) : (
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
                                        {profile?.profile?.bio}
                                    </p>
                                    <h1 className="team-details__subtitle">Education</h1>
                                    <h1 className="team-details__subtitle">Experience</h1>
                                    <h1 className="team-details__subtitle">Skills</h1>
                                    <div className="progress-one__wrap">
                                        {profile?.profile?.skills?.map((skill: any, index: any) => (
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
                                    <a href="/team-details"> {profile?.profile?.handle || name}</a>
                                </h2>
                                <p className="team-one__designation">
                                    {profile?.profile?.status || auth?.users?.role || '.........'}
                                </p>
                            </div>
                            <div className="team-one__social">
                                {Object.values(profile?.profile?.social || {}).map(
                                    (item: any, index) => {
                                        const domain = new URL(item);
                                        const domainName = domain.hostname
                                            .split('.com')
                                            .join('')
                                            .split('www.')
                                            .join('');
                                        return (
                                            <a href={item} key={index}>
                                                <i className={`fab fa-${domainName}`} />
                                            </a>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileDetails;
