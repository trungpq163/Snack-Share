import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddCourse from './AddCourse';
configure({ adapter: new Adapter() });
describe('AddCourse', () => {
    const defaultProps = {
        handleSubmit: () => console.log('handleSubmit'),
        handleChange: (name: string) => console.log(name),
        values: 555,
        options: [],
        handleChangeFile: (name: string) => console.log(name),
        skillLevelOptions: [],
        languageOptions: [],
    };

    it('tests something', () => {
        shallow(<AddCourse {...defaultProps} />);
    });
});
