import * as React from 'react';
import './Login.Styles.css';

const Login = () => {
    return (
        <div className="signup">
            <img src="https://imgur.com/aILP3CD.png" alt="login" className="signup-image" />
            <div className="signup-container">
                <div className="tab">
                    <div className="tab-item">Sign up</div>
                    <div className="tab-item is-active">Sign in</div>
                </div>
                <h1 className="signup-heading">Sign in</h1>
                <form action="" className="signup-form" autoComplete="off">
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
                    <div className="form-group signup-term">
                        By clicking you agree with our{' '}
                        <a href="#" className="signup-term-link">
                            Term of use.
                        </a>
                    </div>
                    <button type="submit" className="btn btn--gradient">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
