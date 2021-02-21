import * as React from 'react';
import { shallow } from 'enzyme';

import MyLearning from './MyLearning';

describe('MyLearning', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<MyLearning {...defaultProps} />);
    });
});
