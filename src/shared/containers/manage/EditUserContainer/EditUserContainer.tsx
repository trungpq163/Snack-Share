import * as React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { getUserEff, updateUser } from 'store/user/effects';
import setData from 'utils/setData';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import EditUser from 'components/manage/EditUser/EditUser';

interface Props {
    pathName?: string;
    user?: any;
}

const EditUserContainer = ({ pathName, user }: Props) => {
    const dispatch = useDispatch();

    const [decoded, setDecoded] = React.useState(undefined);

    const [values, setValues] = React.useState({
        // eslint-disable-next-line camelcase
        first_name: '',
        // eslint-disable-next-line camelcase
        last_name: '',
        email: '',
        password: '',
        role: '',
    });

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            setDecoded(jwtDecode(localStorage.getItem('jwtToken') as string));
        }
    }, []);

    React.useEffect(() => {
        setValues({
            ...values,
            // eslint-disable-next-line camelcase
            first_name: user?.user?.first_name || '',
            // eslint-disable-next-line camelcase
            last_name: user?.user?.last_name || '',
            email: user?.user?.email || '',
            password: user?.user?.password || '',
            role: user?.user?.role || 'student',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userData = {
            // eslint-disable-next-line camelcase
            first_name: values.first_name,
            // eslint-disable-next-line camelcase
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            role: values.role,
        };

        dispatch(
            updateUser(
                pathName,
                userData,
                (err: any) => toast(err),
                (mess: string) => toast(mess),
                () =>
                    setValues({
                        // eslint-disable-next-line camelcase
                        first_name: '',
                        // eslint-disable-next-line camelcase
                        last_name: '',
                        email: '',
                        password: '',
                        role: '',
                    }),
                () => {
                    setData(dispatch, decoded);
                    dispatch(getUserEff(pathName));
                }
            )
        );
    };

    return (
        <>
            {user.loading ? (
                <CircleLoader />
            ) : (
                <EditUser handleSubmit={handleSubmit} handleChange={handleChange} values={values} />
            )}
        </>
    );
};

export default EditUserContainer;
