import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchInput from './SearchInput';
configure({ adapter: new Adapter() });
describe('SearchInput', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<SearchInput {...defaultProps} />);
    });
});
