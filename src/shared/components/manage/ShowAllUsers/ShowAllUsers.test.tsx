import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShowAllUsers from './ShowAllUsers';
configure({ adapter: new Adapter() });
describe('ShowAllUsers', () => {
    const defaultProps = {
        users: [],
        handleISODateToString: (str: string) => str,
        values: 666,
        handleChange: () => console.log('handleChange'),
    };

    it('tests something', () => {
        shallow(<ShowAllUsers {...defaultProps} />);
    });
});
