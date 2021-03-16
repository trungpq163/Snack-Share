import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormEditProfile from './FormEditProfile';
configure({ adapter: new Adapter() });
describe('FormEditProfile', () => {
    const defaultProps = {
        handleSubmit: (_e: React.FormEvent) => console.log('handleSubmit'),
        handleChange: (name: string) => console.log(name),
        options: [],
        values: 666,
    };

    it('tests something', () => {
        shallow(<FormEditProfile {...defaultProps} />);
    });
});
