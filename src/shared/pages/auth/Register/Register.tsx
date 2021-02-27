import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { registerUser } from 'store/auth/effects';

import RegisterDumb from 'components/auth/Register/Register';
import { CenterComponent } from 'styles/CenterComponent';

import { User } from 'types';

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

const Register = ({ match }: any) => {
    const dispatch = useDispatch();
    const roleParams = match.params.role;
    const history = useHistory();

    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
    });

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const clickSubmit = (e: FormEvent) => {
        e.preventDefault();

        const user: User = {
            first_name: values.first_name || '',
            last_name: values.last_name || '',
            email: values.email || '',
            password: values.password || '',
            password2: values.password2 || '',
            role: roleParams || '',
        };

        dispatch(
            registerUser(
                JSON.stringify(user),
                (message: string) => toast(message),
                (err: any) => toast(err),
                () =>
                    setValues({
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        password2: '',
                    }),
                () => history.push('/login')
            )
        );
    };

    return (
        <CenterComponent>
            <RegisterDumb
                roleParams={roleParams}
                capitalizeFirstLetter={capitalizeFirstLetter}
                clickSubmit={clickSubmit}
                handleChange={handleChange}
                values={values}
            />
        </CenterComponent>
    );
};

export default Register;
