import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OtherProfileDetails from './OtherProfileDetails';
configure({ adapter: new Adapter() });
describe('OtherProfileDetails', () => {
    const defaultProps = {
        auth: {
            isAuthenticated: false,
            users: [],
            loading: false,
        },
        profile: {
            experience: [
                { company: 'fpt', title: 'engineer', current: 'Working', from: '', to: '' },
            ],
            education: [
                { school: 'dalat university', degree: 'engineer', fieldofstudy: '', current: '' },
            ],
        },
        name: 'trung',
        courses: [],
        idUser: '',
        enrollments: [],
    };

    it('tests something', () => {
        shallow(<OtherProfileDetails {...defaultProps} />);
    });
});
