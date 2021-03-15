import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputDropdown from './InputDropdown';
configure({ adapter: new Adapter() });
describe('InputDropdown', () => {
    const defaultProps = {
        name: '',
        value: '',
        info: '',
        onChange: '',
        options: [],
        require: true,
    };

    it('tests something', () => {
        shallow(<InputDropdown {...defaultProps} />);
    });
});
