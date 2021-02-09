import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import InstructorPrivateRoute from 'components/InstructorPrivateRoute/InstructorPrivateRoute';
import AdminPrivateRoute from 'components/AdminPrivateRoute/AdminPrivateRoute';
import MainLoader from 'components/MainLoader/MainLoader';
import favicon from '../shared/assets/favicon.png';

import setAuthToken from './utils/setAuthToken';
import { logoutUser } from './store/auth/effects';
import setData from './utils/setData';

import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './containers/HeaderContainer/HeaderContainer';
import Profile from './pages/Profile/Profile';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import EditProfile from './pages/EditProfile/EditProfile';
import AddExperience from './pages/AddExperience/AddExperience';
import AddEducation from './pages/AddEducation/AddEducation';
import ShowCategoryList from './pages/ShowCategoryList/ShowCategoryList';
import CreateCategoryAdmin from './pages/CreateCategoryAdmin/CreateCategoryAdmin';
import EditCategoryList from './pages/EditCategoryList/EditCategoryList';
import ShowAllUsers from './pages/ShowAllUsers/ShowAllUsers';
import EditUser from './pages/EditUser/EditUser';
import AddCourse from './pages/AddCourse/AddCourse';
import AllCourses from './pages/AllCourses/AllCourses';
import Footer from './components/Footer/Footer';

import { GlobalStyle } from './styles/GlobalStyles';

import routes from './routes';

import css from './App.module.css';
import 'styles/utils.css';

// Does not yet work with server side rendering:
// const Home = React.lazy(() => import('./pages/Home'));
// const Page1 = React.lazy(() => import('./pages/Page-1'));
// const Page2 = React.lazy(() => import('./pages/Page-2'));

const App: React.FC<any> = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [loading, setLoading] = React.useState(true);
    const [count, setCount] = React.useState(3);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            // Set auth token and get user info and export default
            setAuthToken(localStorage.jwtToken);
            // Decode token and get user info and export default
            const decoded = jwtDecode(localStorage.jwtToken);
            // Set user and isAuthenticated by call any action using bellow method
            setData(dispatch, decoded);
            // Check for expired token
            const currentTime = Date.now() / 1000;
            if ((decoded as any).exp < currentTime) {
                // Logout user
                dispatch(logoutUser(() => history?.push('/')));
            }
        }
    }, [dispatch, history]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    React.useEffect(() => {
        if (count === 0) {
            setLoading(false);
        }
    }, [count]);

    return (
        // <Suspense fallback={<div>Loading</div>}>
        <>
            {loading ? (
                <MainLoader />
            ) : (
                <div className={css.wrapper}>
                    <GlobalStyle />
                    <Helmet
                        defaultTitle="React SSR Starter – TypeScript Edition"
                        titleTemplate="%s – React SSR Starter – TypeScript Edition"
                        link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
                    />
                    <Header />
                    <Switch>
                        <Route exact path={routes.home} component={Home} />
                        <Route exact path={routes.login} component={Login} />
                        <Route exact path={routes.register} component={Register} />
                        <PrivateRoute exact path={routes.profile} component={Profile} />
                        <PrivateRoute exact path={routes.createprofile} component={CreateProfile} />
                        <PrivateRoute exact path={routes.editprofile} component={EditProfile} />
                        <PrivateRoute exact path={routes.addexperience} component={AddExperience} />
                        <PrivateRoute exact path={routes.addeducation} component={AddEducation} />
                        <AdminPrivateRoute
                            exact
                            path={routes.showcategory}
                            component={ShowCategoryList}
                        />
                        <AdminPrivateRoute
                            exact
                            path={routes.createCategoryAdmin}
                            component={CreateCategoryAdmin}
                        />
                        <AdminPrivateRoute
                            exact
                            path={routes.editCategoryAdmin}
                            component={EditCategoryList}
                        />
                        <AdminPrivateRoute
                            exact
                            path={routes.showAllUsers}
                            component={ShowAllUsers}
                        />
                        <AdminPrivateRoute exact path={routes.editUser} component={EditUser} />
                        <InstructorPrivateRoute
                            exact
                            path={routes.addCourse}
                            component={AddCourse}
                        />
                        <PrivateRoute exact path={routes.allCourses} component={AllCourses} />
                        <Route render={() => '404!'} />
                    </Switch>
                    <Footer />
                </div>
            )}
        </>

        // </Suspense>
    );
};

export default App;
