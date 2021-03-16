import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextAreaField from './TextAreaField';
configure({ adapter: new Adapter() });
describe('TextAreaField', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<TextAreaField {...defaultProps} />);
    });
});
