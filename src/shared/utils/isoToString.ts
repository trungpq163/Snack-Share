export const isoDateToString = (iso: string) => {
    const date = new Date(iso);
    const year = date.getFullYear();
    // eslint-disable-next-line prefer-const
    let month = date.getMonth() + 1;
    // eslint-disable-next-line prefer-const
    let dt = date.getDate();
    if (dt < 10) {
        dt = Number('0' + dt);
    }

    if (month < 10) {
        month = Number('0' + month);
    }

    return `${year}-${month}-${dt}`;
};
