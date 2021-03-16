// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AddLectureContainer from './AddLectureContainer';
configure({ adapter: new Adapter() });
describe('AddLectureContainer', () => {
    // const defaultProps = {
    //     isAuthor: false,
    //     currentUser: {},
    //     course: {},
    // };

    it('tests something', () => {
        // shallow(<AddLectureContainer {...defaultProps} />);
    });
});
