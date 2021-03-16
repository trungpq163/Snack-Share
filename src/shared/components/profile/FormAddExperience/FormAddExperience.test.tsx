import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormAddExperience from './FormAddExperience';
// import any from '*.css';
configure({ adapter: new Adapter() });

describe('FormAddExperience', () => {
    const defaultProps = {
        handleSubmit: (_e: React.FormEvent) => console.log('handleSubmit'),
        values: 555,
        handleCheck: (_e: any) => console.log('handleCheck'),
        handleChange: (_name: any) => (_event: any) => console.log('handleChange'),
    };

    it('tests something', () => {
        shallow(<FormAddExperience {...defaultProps} />);
    });
});
