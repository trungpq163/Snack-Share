import * as React from 'react';
import { shallow } from 'enzyme';

import PageHeader from './PageHeader';

describe('PageHeader', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<PageHeader {...defaultProps} />);
    });
});
