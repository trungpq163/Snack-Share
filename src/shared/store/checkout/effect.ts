import axios, { AxiosRequestConfig } from 'axios';

// const handleClick = async (event) => {
//     const stripe = await stripePromise;
//     const response = await fetch('/create-checkout-session', {
//         method: 'POST',
//     });
//     const session = await response.json();
//     // When the customer clicks on the button, redirect them to Checkout.
//     const result = await stripe.redirectToCheckout({
//         sessionId: session.id,
//     });
//     if (result.error) {
//         // If `redirectToCheckout` fails due to a browser or network
//         // error, display the localized error message to your customer
//         // using `result.error.message`.
//     }
// };

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.message;
    return errRes;
};

export const createSessionCheckout = (
    url: string,
    errorCb: Function,
    redirectWhenSuccess: Function
) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: url,
        headers: {},
    };

    axios(config)
        .then((res) => res.data)
        .then((data) => {
            console.log(data.id);
            redirectWhenSuccess(data.id);
        })
        .catch((err) => {
            console.log('errMessage', err);
            errorCb(errorResponse(err.response?.data));
        });
};
