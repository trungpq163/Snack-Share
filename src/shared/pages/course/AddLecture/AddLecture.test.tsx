import * as React from 'react';
import { shallow } from 'enzyme';

import AddLecture from './AddLecture';

describe('AddLecture', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<AddLecture {...defaultProps} />);
    });
});
