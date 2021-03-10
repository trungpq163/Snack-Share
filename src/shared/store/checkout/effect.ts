import axios, { AxiosRequestConfig } from 'axios';

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
