// import * as React from 'react';
import { /*shallow,*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import Login from './Login';

configure({ adapter: new Adapter() });

describe('Login', () => {
    // const defaultProps = {
    //     clickSubmit: (_e: React.FormEvent) => console.log('clickSubmit'),
    //     handleChange: (_name: any) => (_event: any) => console.log('handleChange'),
    //     values: {
    //         // eslint-disable-next-line camelcase
    //         first_name: 'trung',
    //         // eslint-disable-next-line camelcase
    //         last_name: 'phan',
    //         email: 'quoctrung163@gmail.com',
    //         password: '',
    //         password2: '',
    //         role: 'admin',
    //     },
    // };

    it('tests something', () => {
        // shallow(<Login {...defaultProps} />);
    });
});
