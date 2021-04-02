import * as React from 'react';
import { shallow } from 'enzyme';

import ManageYourStudentContainer from './ManageYourStudentContainer';

describe('ManageYourStudentContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<ManageYourStudentContainer {...defaultProps} />);
    });
});
