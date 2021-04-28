import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Course from '../../../components/common/Course/Course';

import { Auth } from '../../../store/auth/types';
import { profileImage } from '../../../utils/imageURL';
import '../ProfileDetails/ProfileDetails.Styles.css';

interface Props {
    auth?: Auth;
    profile?: any;
    name?: string;
    courses?: any;
    idUser: string;
    enrollments?: any;
}

const OtherProfileDetails = ({ auth, profile, name, courses, idUser, enrollments }: Props) => {
    const { t } = useTranslation();
    const coursesById = courses?.filter((course: any) => course?.instructor?._id === idUser);

    return (
        <section className="team-details">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="team-details__content">
                            <h2 className="team-details__title">{profile?.handle || name}</h2>
                            <p className="mt-2">{profile?.bio}</p>
                            <h1
                                className="team-details__subtitle"
                                style={{ marginBottom: '0.5rem' }}
                            >
                                {t('profile.education')}
                            </h1>
                            {t('profile.school')}: {profile?.education[0]?.school || ''} <br />
                            {t('profile.degree')}: {profile?.education[0]?.degree || ''} <br />
                            {t('profile.fieldOfStudy')}: {profile?.education[0]?.fieldofstudy || ''}{' '}
                            <br />
                            {t('profile.status')}: {profile?.education[0]?.current || ''} <br />
                            {t('profile.from')}: {profile?.education[0]?.from || ''} <br />
                            <h1
                                className="team-details__subtitle"
                                style={{ marginBottom: '0.5rem' }}
                            >
                                {t('profile.experience')}
                            </h1>
                            {t('profile.company')}: {profile?.experience[0]?.company || ''} <br />
                            {t('profile.job')}: {profile?.experience[0]?.title || ''} <br />
                            {t('profile.status')}:{profile?.experience[0]?.current ? 'Working' : ''}{' '}
                            <br />
                            {t('profile.from')}: {profile?.experience[0]?.from || ''} <br />
                            {t('profile.location')}: {profile?.experience[0]?.location || ''} <br />
                            <h1 className="team-details__subtitle">{t('profile.skills')}</h1>
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
                    </div>
                    <div className="col-lg-6">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src={profileImage().avt} alt="avt" />
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
                                {Object.values(profile?.social || {}).map((item: any, index) => {
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
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mt-5 pt-5">
                    <h2 className="team-details__title">{t('breadcrumb.myCourses')}</h2>
                    {coursesById.length > 0
                        ? coursesById.map((course: any, index: number | string) =>
                              coursesById.length === 1 ? (
                                  <Course
                                      key={index}
                                      col={6}
                                      course={course}
                                      enrollments={enrollments}
                                  />
                              ) : coursesById.length === 2 ? (
                                  <Course
                                      key={index}
                                      col={6}
                                      course={course}
                                      enrollments={enrollments}
                                  />
                              ) : (
                                  <Course
                                      key={index}
                                      col={4}
                                      course={course}
                                      enrollments={enrollments}
                                  />
                              )
                          )
                        : ''}
                </div>
            </div>
        </section>
    );
};

export default OtherProfileDetails;
