import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import { registerUser } from '../../store/auth/effects';

import '../../styles/Form.Styles.css';
import 'react-toastify/dist/ReactToastify.css';

interface User {
    // eslint-disable-next-line camelcase
    first_name: string;
    // eslint-disable-next-line camelcase
    last_name: string;
    email: string;
    password: string;
    password2: string;
    role?: string;
}

const Register = ({ match }: any) => {
    const dispatch = useDispatch();
    const roleParams = match.params.role;
    const history = useHistory();

    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
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
            first_name: values.first_name || '',
            last_name: values.last_name || '',
            email: values.email || '',
            password: values.password || '',
            password2: values.password2 || '',
            role: roleParams || '',
        };

        dispatch(
            registerUser(
                JSON.stringify(user),
                roleParams,
                (message: string) => toast(message),
                (err: any) => toast(err),
                () =>
                    setValues({
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        password2: '',
                    }),
                () => history.push(`/login/${roleParams}`)
            )
        );
    };

    return (
        <div className="signup-signin">
            <img src="https://imgur.com/aILP3CD.png" alt="login" className="signup-signin-image" />
            <div className="signup-signin-container">
                <div className="tab">
                    <div className="tab-item is-active">Sign up</div>
                    <div className="tab-item">Sign in</div>
                </div>
                <h1 className="signup-signin-heading">Sign up</h1>
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
                        <Link className="signup-signin-term-link" to="/login/users">
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
