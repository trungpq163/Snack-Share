import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CreateCategory from './CreateCategory';

configure({ adapter: new Adapter() });
describe('CreateCategory', () => {
    const defaultProps = {
        values: {
            categoryName: '',
            no: 1,
        },
        handleSubmit: (_e: React.FormEvent) => console.log('helloworld'),
        handleChange: () => console.log('handleChange'),
    };

    it('tests something', () => {
        shallow(<CreateCategory {...defaultProps} />);
    });
});
