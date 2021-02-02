import * as React from 'react';
import { shallow } from 'enzyme';

import Introduction from './Introduction';

describe('Introduction', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Introduction {...defaultProps} />);
    });
});
