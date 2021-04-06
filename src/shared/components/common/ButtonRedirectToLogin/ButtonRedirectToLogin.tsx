import * as React from 'react';
import { Link } from 'react-router-dom';

const ButtonRedirectToLogin = () => {
    return (
        <Link to="/login">
            <button type="submit" className="thm-btn course-details__comment-form-btn">
                Login for rating........
            </button>
        </Link>
    );
};

export default ButtonRedirectToLogin;
