import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputField from './InputField';
configure({ adapter: new Adapter() });
describe('InputField', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<InputField {...defaultProps} />);
    });
});
