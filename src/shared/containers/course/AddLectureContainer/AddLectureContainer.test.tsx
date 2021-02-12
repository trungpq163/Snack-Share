import * as React from 'react';
import { shallow } from 'enzyme';

import AddLectureContainer from './AddLectureContainer';

describe('AddLectureContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<AddLectureContainer {...defaultProps} />);
    });
});
