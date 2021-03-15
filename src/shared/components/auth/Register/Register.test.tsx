import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Register from './Register';

configure({ adapter: new Adapter() });
describe('Register', () => {
    const defaultProps = {
        roleParams: 'admin',
        capitalizeFirstLetter: (str: string) => str,
        clickSubmit: (_e: any) => console.log('clickSubmit'),
        handleChange: (_name: any) => (_event: any) => console.log('handleChange'),
        values: {
            // eslint-disable-next-line camelcase
            first_name: 'trung',
            // eslint-disable-next-line camelcase
            last_name: 'phan',
            email: 'quoctrung@icloud.com',
            password: '',
            password2: '',
            role: 'admin',
        },
    };

    it('tests something', () => {
        shallow(<Register {...defaultProps} />);
    });
});
