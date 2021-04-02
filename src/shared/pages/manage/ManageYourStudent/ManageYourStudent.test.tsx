import * as React from 'react';
import { shallow } from 'enzyme';

import ManageYourStudent from './ManageYourStudent';

describe('ManageYourStudent', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<ManageYourStudent {...defaultProps} />);
    });
});
