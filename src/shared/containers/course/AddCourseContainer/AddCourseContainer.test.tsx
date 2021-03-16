// import * as React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import { Provider } from 'react-redux';
// import AddCourseContainer from './AddCourseContainer';
configure({ adapter: new Adapter() });
describe('AddCourseContainer', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // const wrapper = shallow(<AddCourseContainer {...defaultProps} />);
        // expect(wrapper.find(Provider)).to.have.lengthOf(3);
    });
});
