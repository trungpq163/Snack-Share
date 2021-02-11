import * as React from 'react';
import { shallow } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<SearchInput {...defaultProps} />);
    });
});
