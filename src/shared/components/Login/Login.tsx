import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LinkCustom, LinkCustomActive } from '../../styles/LinkCustom.Styles';

import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Form.Styles.css';

const Login = ({ roleParams, clickSubmit, handleChange, values }: any) => {
    return (
        <div className="signup-signin">
            <img src="https://imgur.com/aILP3CD.png" alt="login" className="signup-signin-image" />
            <div className="signup-signin-container">
                <div className="tab">
                    <div className="tab-item">
                        <LinkCustom to={`/register/${roleParams}`}>Sign up</LinkCustom>
                    </div>
                    <div className="tab-item is-active">
                        <LinkCustomActive to={`/login/${roleParams}`}>Sign in</LinkCustomActive>
                    </div>
                </div>
                <h1 className="signup-signin-heading">Sign in</h1>
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
                        Don’t have an account?{' '}
                        <Link className="signup-signin-term-link" to="/register/student">
                            Sign up (student)
                        </Link>
                        {' / '}
                        <Link className="signup-signin-term-link" to="/register/instructor">
                            Sign up (instructor)
                        </Link>
                    </div>
                    <button type="submit" className="btn btn--gradient">
                        Sign in
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
