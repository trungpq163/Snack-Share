import * as React from 'react';
import { shallow } from 'enzyme';

import ShowAllUsersContainer from './ShowAllUsersContainer';

describe('ShowAllUsersContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<ShowAllUsersContainer {...defaultProps} />);
    });
});
