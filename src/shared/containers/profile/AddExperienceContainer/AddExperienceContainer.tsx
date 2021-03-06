import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { toastErrorNotify, toastSuccessNotify } from 'utils/toast';

import setData from 'utils/setData';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import FormAddExperience from 'components/profile/FormAddExperience/FormAddExperience';
import { addExperience } from '../../../store/profile/effects';

interface Props {
    profile: any;
    loading: any;
    auth: any;
}

const AddExperienceContainer = ({ profile, loading, auth }: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [decoded, setDecoded] = React.useState(undefined);

    const [values, setValues] = React.useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',
        disabled: false,
    });

    React.useEffect(() => {
        setDecoded(jwtDecode(localStorage.getItem('jwtToken') as string));
    }, []);

    React.useEffect(() => {
        setValues({
            ...values,
            company: profile?.experience[0]?.company || '',
            title: profile?.experience[0]?.title || '',
            location: profile?.experience[0]?.location || '',
            from: profile?.experience[0]?.from || '',
            to: profile?.experience[0]?.to || '',
            current: profile?.experience[0]?.current || '',
            description: profile?.experience[0]?.description || '',
            disabled: profile?.experience[0]?.disabled || '',
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

        const expData = {
            company: values.company,
            title: values.title,
            location: values.location,
            from: values.from,
            to: values.to,
            current: values.current,
            description: values.description,
        };

        dispatch(
            addExperience(
                expData,
                (err: any) => toastErrorNotify(err),
                (mess: string) => toastSuccessNotify(mess),
                () =>
                    setValues({
                        company: '',
                        title: '',
                        location: '',
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
                <FormAddExperience
                    handleSubmit={handleSubmit}
                    values={values}
                    handleChange={handleChange}
                    handleCheck={handleCheck}
                />
            )}
        </>
    );
};

export default AddExperienceContainer;
