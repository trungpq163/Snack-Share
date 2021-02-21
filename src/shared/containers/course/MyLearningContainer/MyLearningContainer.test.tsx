import * as React from 'react';
import { shallow } from 'enzyme';

import MyLearningContainer from './MyLearningContainer';

describe('MyLearningContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<MyLearningContainer {...defaultProps} />);
    });
});
