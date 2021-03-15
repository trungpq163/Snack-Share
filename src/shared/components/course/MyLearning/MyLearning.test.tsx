import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MyLearning from './MyLearning';

configure({ adapter: new Adapter() });

describe('MyLearning', () => {
    const defaultProps = {
        courses: [],
        enrollments: [],
    };

    it('tests something', () => {
        shallow(<MyLearning {...defaultProps} />);
    });
});
