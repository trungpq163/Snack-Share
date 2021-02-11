import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LinkCustom, LinkCustomActive } from 'styles/LinkCustom.Styles';

import 'react-toastify/dist/ReactToastify.css';
import 'styles/Form.Styles.css';

import { User } from 'types';

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
    return (
        <div className="signup-signin">
            <img src="https://imgur.com/aILP3CD.png" alt="login" className="signup-signin-image" />
            <div className="signup-signin-container">
                <div className="tab">
                    <div className="tab-item is-active">
                        <LinkCustomActive to={`/register/${roleParams}`}>Sign up</LinkCustomActive>
                    </div>
                    <div className="tab-item">
                        <LinkCustom to={`/login/${roleParams}`}>Sign in</LinkCustom>
                    </div>
                </div>
                <h1 className="signup-signin-heading">
                    Sign up {`(for ${roleParams ? `${capitalizeFirstLetter(roleParams)}` : ''})`}
                </h1>
                <form
                    action="post"
                    className="signup-signin-form"
                    autoComplete="off"
                    onSubmit={clickSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="firstName" className="form-label">
                            First name
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
                            Last name
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
                    <div className="form-group">
                        <label htmlFor="re-password" className="form-label">
                            Repeat password
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
                        Already have an account?{' '}
                        <Link className="signup-signin-term-link" to={`/login/${roleParams}`}>
                            Log in
                        </Link>
                    </div>
                    <button type="submit" className="btn btn--gradient">
                        Sign up
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;
