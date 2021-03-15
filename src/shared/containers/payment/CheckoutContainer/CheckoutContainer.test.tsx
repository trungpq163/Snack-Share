import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CheckoutContainer from './CheckoutContainer';
configure({ adapter: new Adapter() });
describe('CheckoutContainer', () => {
    const defaultProps = {
        idCourse: '',
        idUser: '',
        price: 55,
    };

    it('tests something', () => {
        shallow(<CheckoutContainer {...defaultProps} />);
    });
});
