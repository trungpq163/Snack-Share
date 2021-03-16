// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import CourseDetailsLeftBar from './CourseDetailsLeftBar';

configure({ adapter: new Adapter() });

describe('CourseDetailsLeftBar', () => {
    // const defaultProps = {
    //     firstName: 'trung',
    //     lastName: 'phan',
    //     avt: '',
    //     courseName: 'react',
    //     categoryName: 'web development',
    //     image: '',
    //     courseDescription: '',
    //     team2: '',
    //     idInstructor: '',
    // };

    it('tests something', () => {
        // shallow(<CourseDetailsLeftBar {...defaultProps} />);
    });
});
