import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CategoriesContainer from './CategoriesContainer';
configure({ adapter: new Adapter() });
describe('CategoriesContainer', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<CategoriesContainer {...defaultProps} />);
    });
});
