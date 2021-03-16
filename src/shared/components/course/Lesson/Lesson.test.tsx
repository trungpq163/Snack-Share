import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Lesson from './Lesson';
configure({ adapter: new Adapter() });
describe('Lesson', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Lesson {...defaultProps} />);
    });
});
