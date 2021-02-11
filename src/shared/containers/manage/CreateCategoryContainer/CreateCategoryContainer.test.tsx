import * as React from 'react';
import { shallow } from 'enzyme';

import CreateCategoryContainer from './CreateCategoryContainer';

describe('CreateCategoryContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CreateCategoryContainer {...defaultProps} />);
    });
});
