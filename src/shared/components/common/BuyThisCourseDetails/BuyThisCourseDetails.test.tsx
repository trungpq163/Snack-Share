import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BuyThisCourseDetails from './BuyThisCourseDetails';

configure({ adapter: new Adapter() });

describe('BuyThisCourseDetails', () => {
    const defaultProps = {
        price: 5000,
        redirectToSessionCheckout: () => 'redirect',
    };

    it('tests something', () => {
        shallow(<BuyThisCourseDetails {...defaultProps} />);
    });
});
