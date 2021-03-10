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
    const data = JSON.stringify({
        student: '603672079555802b8117410a',
        course: '6037a7e5e445271ce0d25e06',
    });
    const config: AxiosRequestConfig = {
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
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
