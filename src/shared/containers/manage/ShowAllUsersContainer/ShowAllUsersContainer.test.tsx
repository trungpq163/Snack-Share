import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShowAllUsersContainer from './ShowAllUsersContainer';
configure({ adapter: new Adapter() });
describe('ShowAllUsersContainer', () => {
    const defaultProps = {
        users: {
            loading: true,
            users: [],
        },
    };

    it('tests something', () => {
        shallow(<ShowAllUsersContainer {...defaultProps} />);
    });
});
