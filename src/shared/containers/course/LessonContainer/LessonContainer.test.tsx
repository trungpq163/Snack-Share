import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LessonContainer from './LessonContainer';
configure({ adapter: new Adapter() });
describe('LessonContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<LessonContainer {...defaultProps} />);
    });
});
