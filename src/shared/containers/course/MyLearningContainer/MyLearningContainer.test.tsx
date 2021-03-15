import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MyLearningContainer from './MyLearningContainer';

configure({ adapter: new Adapter() });
describe('MyLearningContainer', () => {
    const defaultProps = {
        courses: [],
        enrollments: [],
    };

    it('tests something', () => {
        shallow(<MyLearningContainer {...defaultProps} />);
    });
});
