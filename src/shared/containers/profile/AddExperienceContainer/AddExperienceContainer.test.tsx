import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddExperienceContainer from './AddExperienceContainer';
configure({ adapter: new Adapter() });

describe('AddExperienceContainer', () => {
    const defaultProps = {
        profile: {},
        loading: false,
        auth: {},
    };

    it('tests something', () => {
        shallow(<AddExperienceContainer {...defaultProps} />);
    });
});
