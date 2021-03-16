import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormCreateProfile from './FormCreateProfile';

configure({ adapter: new Adapter() });
describe('FormCreateProfile', () => {
    const defaultProps = {
        handleSubmit: (_e: React.FormEvent) => console.log('handleSubmit'),
        handleChange: (name: string) => console.log(name),
        options: [],
        values: '',
    };

    it('tests something', () => {
        shallow(<FormCreateProfile {...defaultProps} />);
    });
});
