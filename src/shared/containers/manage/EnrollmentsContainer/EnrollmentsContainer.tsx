import * as React from 'react';
import { useDispatch } from 'react-redux';
import { toastErrorNotify, toastSuccessNotify } from 'utils/toast';
import { deleteEnrollmentsByID, getAllEnrollments } from 'store/enrollment/effects';

import Enrollments from 'components/manage/Enrollments/Enrollments';

interface Props {
    enrollments: any;
}

const EnrollmentsContainer = ({ enrollments }: Props) => {
    const dispatch = useDispatch();
    const handleDelete = (id: string) => {
        dispatch(
            deleteEnrollmentsByID(
                id,
                (err: any) => toastErrorNotify(err),
                (mess: string) => toastSuccessNotify(mess),
                () => dispatch(getAllEnrollments())
            )
        );
    };
    return <Enrollments enrollments={enrollments} handleDelete={handleDelete} />;
};

export default EnrollmentsContainer;
