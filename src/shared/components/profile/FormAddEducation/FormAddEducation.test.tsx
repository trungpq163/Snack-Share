import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormAddEducation from './FormAddEducation';
configure({ adapter: new Adapter() });
describe('FormAddEducation', () => {
    const defaultProps = {
        handleSubmit: (_e: React.FormEvent) => console.log('handleSubmit'),
        values: '',
        handleCheck: (_e: any) => console.log('handleCheck'),
        handleChange: (_name: any) => (_event: any) => console.log('handleChange'),
    };

    it('tests something', () => {
        shallow(<FormAddEducation {...defaultProps} />);
    });
});
