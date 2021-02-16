import * as React from 'react';

import CheckoutContainer from 'containers/payment/CheckoutContainer/CheckoutContainer';
import PageHeader from 'components/layout/PageHeader/PageHeader';

const Checkout = () => {
    return (
        <>
            <PageHeader title="Checkout" />
            <CheckoutContainer />
        </>
    );
};

export default Checkout;
