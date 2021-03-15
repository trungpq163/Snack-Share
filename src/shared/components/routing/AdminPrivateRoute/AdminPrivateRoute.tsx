import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import { getAuth } from '../../../store/auth/selectors';

const AdminPrivateRoute = ({ component: Component, ...rest }: any) => {
    const auth = useSelector(getAuth);

    const [decoded, setDecoded] = React.useState({
        exp: 0,
        first_name: '',
        iat: 0,
        id: '',
        last_name: '',
        role: '',
    });

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            setDecoded(jwtDecode(localStorage.getItem('jwtToken') as string));
        }
    }, []);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    if (loading === true) {
        return <CircleLoader />;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                auth.isAuthenticated === true && decoded?.role === 'admin' ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default AdminPrivateRoute;
