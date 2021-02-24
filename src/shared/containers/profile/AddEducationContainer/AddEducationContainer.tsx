import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { toast } from 'react-toastify';

import setData from 'utils/setData';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

import FormAddEducation from 'components/profile/FormAddEducation/FormAddEducation';
import { addEducation } from '../../../store/profile/effects';

interface Props {
    profile: any;
    loading: any;
    auth: any;
}

const AddEducationContainer = ({ profile, loading, auth }: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [decoded, setDecoded] = React.useState(undefined);

    const [values, setValues] = React.useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: '',
        disabled: false,
    });

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            setDecoded(jwtDecode(localStorage.getItem('jwtToken') as string));
        }
    }, []);

    React.useEffect(() => {
        setValues({
            ...values,
            school: profile?.education[0]?.school || '',
            degree: profile?.education[0]?.degree || '',
            fieldofstudy: profile?.education[0]?.fieldofstudy || '',
            from: profile?.education[0]?.from || '',
            to: profile?.education[0]?.to || '',
            current: profile?.education[0]?.current || '',
            description: profile?.education[0]?.description || '',
            disabled: profile?.education[0]?.disabled || '',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile]);

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleCheck = (_e: any) => {
        setValues({
            ...values,
            disabled: !values.disabled,
            current: !values.current,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const eduData = {
            school: values.school,
            degree: values.degree,
            fieldofstudy: values.fieldofstudy,
            from: values.from,
            to: values.to,
            current: values.current,
            description: values.description,
        };

        dispatch(
            addEducation(
                eduData,
                (err: any) => toast(err),
                (mess: string) => toast(mess),
                () =>
                    setValues({
                        school: '',
                        degree: '',
                        fieldofstudy: '',
                        from: '',
                        to: '',
                        current: false,
                        description: '',
                        disabled: false,
                    }),
                () => setData(dispatch, decoded),
                () => history.push(`/user/${auth?.users?.id}`)
            )
        );
    };

    return (
        <>
            {loading ? (
                <CircleLoader />
            ) : (
                <FormAddEducation
                    handleSubmit={handleSubmit}
                    values={values}
                    handleChange={handleChange}
                    handleCheck={handleCheck}
                />
            )}
        </>
    );
};

export default AddEducationContainer;
