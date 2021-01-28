import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Form.Styles.css';

const Login = () => {
    return (
        <div className="signup-signin">
            <img src="https://imgur.com/aILP3CD.png" alt="login" className="signup-signin-image" />
            <div className="signup-signin-container">
                <div className="tab">
                    <div className="tab-item">Sign up</div>
                    <div className="tab-item is-active">Sign in</div>
                </div>
                <h1 className="signup-signin-heading">Sign in</h1>
                <form action="" className="signup-signin-form" autoComplete="off">
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
            </div>
        </div>
    );
};

export default Login;
