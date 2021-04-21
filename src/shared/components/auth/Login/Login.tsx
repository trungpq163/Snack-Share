import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import CloudinaryImage from '../../common/CloudinaryImage/CloudinaryImage';
import { User } from '../../../types';
import { LinkCustom, LinkCustomActive } from '../../../styles/LinkCustom.Styles';

import '../../../styles/Form.Styles.css';

interface Props {
    clickSubmit: (e: FormEvent) => void;
    handleChange: (name: any) => (event: any) => void;
    values: User;
}

const Login = ({ clickSubmit, handleChange, values }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="signup-signin">
            <CloudinaryImage url="intro/bg_bswtvg.jpg" />
            <div className="signup-signin-container">
                <div className="tab">
                    <div className="tab-item">
                        <LinkCustom to={'/register/student'}>{t('login.signup')}</LinkCustom>
                    </div>
                    <div className="tab-item is-active">
                        <LinkCustomActive to={'/login/'}>{t('login.signin')}</LinkCustomActive>
                    </div>
                </div>
                <h1 className="signup-signin-heading">{t('login.signin')}</h1>
                <form
                    action="post"
                    className="signup-signin-form"
                    autoComplete="off"
                    onSubmit={clickSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="Ex: johndoe@email.com"
                            value={values.email}
                            onChange={handleChange('email')}
                            required
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
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
                    <div className="form-group signup-signin-term">
                        {t('login.detail')}{' '}
                        <Link className="signup-signin-term-link" to="/register/student">
                            {t('login.signupStudent')}
                        </Link>
                        {' / '}
                        <Link className="signup-signin-term-link" to="/register/instructor">
                            {t('login.signupInstructor')}
                        </Link>
                    </div>
                    <button type="submit" className="btn btn--gradient">
                        {t('login.signin')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
