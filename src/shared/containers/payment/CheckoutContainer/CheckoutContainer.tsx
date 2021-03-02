import * as React from 'react';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Checkout from 'components/payment/Checkout/Checkout';
import { addEnrollments, getAllEnrollments } from 'store/enrollment/effects';

interface Props {
    idCourse?: string;
    idUser?: string;
    price?: number;
}

const CheckoutContainer = ({ idCourse, idUser, price }: Props) => {
    const dispatch = useDispatch();
    const [values, setValues] = React.useState({
        name: '',
        cardNumber: '',
        expire: '',
        cvv: '',
        street: '',
        city: '',
        stateProvince: '',
        zipCode: '',
    });

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const checkoutData = {
            checkout: {
                name: values.name,
                cardNumber: values.cardNumber,
                expire: values.expire,
                cvv: values.cvv,
                street: values.street,
                city: values.city,
                stateProvince: values.stateProvince,
                zipCode: values.zipCode,
            },
            course: idCourse,
            student: idUser,
            approved: true,
            no: 1,
        };

        dispatch(
            addEnrollments(
                checkoutData,
                (err: any) => toast(err),
                (mess: string) => toast(mess),
                () =>
                    setValues({
                        name: '',
                        cardNumber: '',
                        expire: '',
                        cvv: '',
                        street: '',
                        city: '',
                        stateProvince: '',
                        zipCode: '',
                    }),
                () => dispatch(getAllEnrollments)
            )
        );
    };

    return (
        <Checkout
            values={values}
            price={price}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default CheckoutContainer;
