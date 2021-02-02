import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { loginUser } from '../../store/auth/effects';

import LoginDumb from '../../components/Login/Login';

interface User {
    email: string;
    password: string;
    role?: string;
}

const Login = ({ match }: any) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const roleParams = match.params.role;

    const [values, setValues] = useState({
        email: '',
        password: '',
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
            email: values.email,
            password: values.password,
        };

        dispatch(
            loginUser(
                user,
                (err: any) => toast(err),
                () =>
                    setValues({
                        email: '',
                        password: '',
                    }),
                () => history.push('/')
            )
        );
    };

    return (
        <LoginDumb
            roleParams={roleParams}
            clickSubmit={clickSubmit}
            handleChange={handleChange}
            values={values}
        />
    );
};

export default Login;
