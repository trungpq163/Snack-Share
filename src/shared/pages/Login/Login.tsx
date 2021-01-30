import React, { FormEvent, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import { loginUser } from '../../store/auth/effects';

import { LinkCustom, LinkCustomActive } from '../../styles/LinkCustom.Styles';

import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Form.Styles.css';

interface User {
    email: string;
    password: string;
    role?: string;
}

const Login = ({ match }: any) => {
    const dispatch = useDispatch();
    const roleParams = match.params.role;
    const history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const clickSubmit = (e: FormEvent) => {
        e.preventDefault();

        const user: User = {
            email: values.email,
            password: values.password,
        };

        dispatch(
            loginUser(
                JSON.stringify(user),
                roleParams,
                (err: any) => toast(err),
                () =>
                    setValues({
                        email: '',
                        password: '',
                    }),
                () => history.push('/')
            )
        );
    };

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
                        <Link className="signup-signin-term-link" to="/register/users">
                            Sign up
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
