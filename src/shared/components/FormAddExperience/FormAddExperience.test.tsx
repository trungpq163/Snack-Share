import * as React from 'react';
import { shallow } from 'enzyme';

import FormAddExperience from './FormAddExperience';
import any from '*.css';

describe('FormAddExperience', () => {
    const defaultProps = any;

    it('tests something', () => {
        shallow(<FormAddExperience {...defaultProps} />);
    });
});
