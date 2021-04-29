import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { User } from '../../../types';
import { CenterComponent } from '../../../styles/CenterComponent';

import LoginDumb from '../../../components/auth/Login/Login';
import { loginUser } from '../../../store/auth/effects';
import { toastErrorNotify, toastSuccessNotify } from '../../../utils/toast';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const clickSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const user: User = {
            email: values.email,
            password: values.password,
        };

        dispatch(
            loginUser(
                user,
                (err: any) => toastErrorNotify(err),
                (mess: string) => toastSuccessNotify(mess),
                () => {
                    setValues({
                        email: '',
                        password: '',
                    });
                    setLoading(false);
                },
                () => history.push('/')
            )
        );
    };

    return (
        <CenterComponent>
            <LoginDumb
                clickSubmit={clickSubmit}
                handleChange={handleChange}
                values={values}
                loading={loading}
            />
        </CenterComponent>
    );
};

export default Login;
