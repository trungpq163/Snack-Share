import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { LinkCustom, LinkCustomActive } from '../../../styles/LinkCustom.Styles';

import { User } from '../../../types';

import bg from '../../../assets/images/bg.png';

import '../../../styles/Form.Styles.css';

interface Props {
    roleParams: string;
    capitalizeFirstLetter: (str: string) => string;
    clickSubmit: (e: any) => void;
    handleChange: (name: any) => (event: any) => void;
    values: User;
}

const Register = ({
    roleParams,
    capitalizeFirstLetter,
    clickSubmit,
    handleChange,
    values,
}: Props) => {
    const { t, i18n } = useTranslation();
    const VNlanguage = i18n.language === 'vi_VN';
    const text = VNlanguage
        ? roleParams === 'student'
            ? '(Học sinh)'
            : '(Người hướng dẫn)'
        : roleParams === 'student'
        ? '(Student)'
        : '(Instructor)';

    return (
        <div className="signup-signin">
            <img src={bg} alt="login" className="signup-signin-image" />
            <div className="signup-signin-container">
                <div className="tab">
                    <div className="tab-item is-active">
                        <LinkCustomActive to={`/register/${roleParams}`}>
                            {t('register.signup')}
                        </LinkCustomActive>
                    </div>
                    <div className="tab-item">
                        <LinkCustom to={'/login'}>{t('register.signin')}</LinkCustom>
                    </div>
                </div>
                <h1 className="signup-signin-heading">
                    {t('register.signup')} {capitalizeFirstLetter(text)}
                </h1>
                <form
                    action="post"
                    className="signup-signin-form"
                    autoComplete="off"
                    onSubmit={clickSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="firstName" className="form-label">
                            {t('register.firstName')}
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="form-input"
                            placeholder="Ex: Trung"
                            value={values.first_name}
                            onChange={handleChange('first_name')}
                            required
                            name="firstName"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="form-label">
                            {t('register.lastName')}
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="form-input"
                            placeholder="Ex: Phan"
                            value={values.last_name}
                            onChange={handleChange('last_name')}
                            required
                            name="lastName"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="Ex: trungphan@email.com"
                            value={values.email}
                            onChange={handleChange('email')}
                            required
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            {t('register.password')}
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="************"
                            value={values.password}
                            onChange={handleChange('password')}
                            required
                            name="password"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="re-password" className="form-label">
                            {t('register.repeatPassword')}
                        </label>
                        <input
                            type="password"
                            id="re-password"
                            className="form-input"
                            placeholder="************"
                            value={values.password2}
                            onChange={handleChange('password2')}
                            required
                            name="re-password"
                        />
                    </div>
                    <div className="form-group signup-signin-term">
                        {t('register.alReadyHaveAnAccount')}?{' '}
                        <Link className="signup-signin-term-link" to={'/login'}>
                            {t('register.login')}
                        </Link>
                    </div>
                    <button type="submit" className="btn btn--gradient">
                        {t('register.signup')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
