import * as React from 'react';
import { shallow } from 'enzyme';

import Categories from './Categories';

describe('Categories', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Categories {...defaultProps} />);
    });
});
