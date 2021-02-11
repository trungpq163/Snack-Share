import * as React from 'react';
import { shallow } from 'enzyme';

import TextAreaField from './TextAreaField';

describe('TextAreaField', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<TextAreaField {...defaultProps} />);
    });
});
