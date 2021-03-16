import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddLecture from './AddLecture';
configure({ adapter: new Adapter() });
describe('AddLecture', () => {
    const defaultProps = {
        handleSubmit: () => console.log('handleSubmit'),
        handleChange: () => console.log('handleChange'),
        values: 6666,
        course: {},
    };

    it('tests something', () => {
        shallow(<AddLecture {...defaultProps} />);
    });
});
