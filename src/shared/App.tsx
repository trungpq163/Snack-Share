import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import PrivateRoute from 'components/routing/PrivateRoute/PrivateRoute';
import InstructorPrivateRoute from 'components/routing/InstructorPrivateRoute/InstructorPrivateRoute';
import AdminPrivateRoute from 'components/routing/AdminPrivateRoute/AdminPrivateRoute';
import MainLoader from 'components/loader/MainLoader/MainLoader';
import AddLecture from 'pages/course/AddLecture/AddLecture';
import favicon from '../shared/assets/favicon.png';
import setAuthToken from './utils/setAuthToken';
import { logoutUser } from './store/auth/effects';
import setData from './utils/setData';

import Home from './pages/main/Home/Home';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import Header from './containers/layout/HeaderContainer/HeaderContainer';
import Profile from './pages/profile/Profile/Profile';
import CreateProfile from './pages/profile/CreateProfile/CreateProfile';
import EditProfile from './pages/profile/EditProfile/EditProfile';
import AddExperience from './pages/profile/AddExperience/AddExperience';
import AddEducation from './pages/profile/AddEducation/AddEducation';
import ShowCategoryList from './pages/manage/ShowCategoryList/ShowCategoryList';
import CreateCategoryAdmin from './pages/manage/CreateCategoryAdmin/CreateCategoryAdmin';
import EditCategoryList from './pages/manage/EditCategoryList/EditCategoryList';
import ShowAllUsers from './pages/manage/ShowAllUsers/ShowAllUsers';
import EditUser from './pages/manage/EditUser/EditUser';
import AddCourse from './pages/course/AddCourse/AddCourse';
import AllCourses from './pages/course/AllCourses/AllCourses';
import ManageCourses from './pages/course/ManageCourses/ManageCourses';
import CourseDetails from './pages/course/CourseDetails/CourseDetails';
import Checkout from './pages/payment/Checkout/Checkout';
import Footer from './components/layout/Footer/Footer';

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
            setLoading(false);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        // <Suspense fallback={<div>Loading</div>}>
        <>
            {loading ? (
                <>
                    <Helmet
                        defaultTitle="React SSR Starter – TypeScript Edition"
                        titleTemplate="%s – React SSR Starter – TypeScript Edition"
                        link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
                    />
                    <MainLoader />
                </>
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
                        <InstructorPrivateRoute
                            exact
                            path={routes.addLecture}
                            component={AddLecture}
                        />
                        <InstructorPrivateRoute
                            exact
                            path={routes.manageCourses}
                            component={ManageCourses}
                        />
                        <PrivateRoute exact path={routes.allCourses} component={AllCourses} />
                        <Route exact path={routes.courseDetails} component={CourseDetails} />
                        <PrivateRoute exact path={routes.courseCheckout} component={Checkout} />
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
