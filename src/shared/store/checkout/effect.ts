import axios, { AxiosRequestConfig } from 'axios';

export const errorResponse = (errData: any): string | undefined => {
    const errRes = errData?.message;
    return errRes;
};

export const createSessionCheckout = (
    url: string,
    studentId: string,
    dataCourse: any,
    errorCb: Function,
    redirectWhenSuccess: Function
) => {
    const data = JSON.stringify({
        studentId: studentId,
        course: dataCourse,
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
            redirectWhenSuccess(data.id);
        })
        .catch((err) => {
            errorCb(errorResponse(err.response?.data));
        });
};
