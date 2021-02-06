import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from '../../store/auth/selectors';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const auth = useSelector(getAuth);
    return (
        <Route
            {...rest}
            render={(props) =>
                auth.isAuthenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login/student" />
                )
            }
        />
    );
};

export default PrivateRoute;
