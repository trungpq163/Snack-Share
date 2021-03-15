import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Checkout from './Checkout';

configure({ adapter: new Adapter() });

describe('Checkout', () => {
    const defaultProps = {
        values: '',
        handleChange: (_name: any) => (_event: any) => console.log('checkout'),
        handleSubmit: '',
        price: 200,
    };

    it('tests something', () => {
        shallow(<Checkout {...defaultProps} />);
    });
});
