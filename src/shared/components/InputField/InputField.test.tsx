import * as React from 'react';
import { shallow } from 'enzyme';

import InputField from './InputField';

describe('InputField', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<InputField {...defaultProps} />);
    });
});
