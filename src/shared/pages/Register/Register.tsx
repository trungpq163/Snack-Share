import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Form.Styles.css';

const Register = () => {
    return (
        <div className="signup-signin">
            <img src="https://imgur.com/aILP3CD.png" alt="login" className="signup-signin-image" />
            <div className="signup-signin-container">
                <div className="tab">
                    <div className="tab-item is-active">Sign up</div>
                    <div className="tab-item">Sign in</div>
                </div>
                <h1 className="signup-signin-heading">Sign up</h1>
                <form action="" className="signup-signin-form" autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Full name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            placeholder="Ex: John Doe"
                            required
                            name="name"
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
                            placeholder="Ex: johndoe@email.com"
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
            </div>
        </div>
    );
};

export default Register;
