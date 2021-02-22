import * as React from 'react';
import { shallow } from 'enzyme';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CategoriesContainer {...defaultProps} />);
    });
});
