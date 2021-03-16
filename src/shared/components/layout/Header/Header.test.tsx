// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Header from './Header';
configure({ adapter: new Adapter() });
describe('Header', () => {
    // const defaultProps = {
    //     logout: () => console.log('logout successfully'),
    //     auth: {},
    //     classNameHome: 'class',
    //     classNameDashboard: 'class',
    //     classNameUsers: 'class',
    //     classNameCategory: 'class',
    //     classNameEnroll: 'class',
    //     classMyCourses: 'class',
    //     classAllCourses: 'class',
    //     classProfile: 'class',
    //     classNameLogin: 'class',
    //     classNameInstructor: 'class',
    //     classMyLearning: 'class',
    // };

    it('tests something', () => {
        // shallow(<Header {...defaultProps} />);
    });
});
