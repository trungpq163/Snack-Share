import * as React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteEnrollmentsByID, getAllEnrollments } from 'store/enrollment/effects';
import EnrollmentList from 'components/manage/EnrollmentList/EnrollmentList';

interface Props {
    enrollments: any;
}

const EnrollmentListContainer = ({ enrollments }: Props) => {
    const dispatch = useDispatch();
    const handleDelete = (id: string) => {
        dispatch(
            deleteEnrollmentsByID(
                id,
                (err: any) => toast(err),
                (mess: string) => toast(mess),
                () => dispatch(getAllEnrollments())
            )
        );
    };
    return <EnrollmentList enrollments={enrollments} handleDelete={handleDelete} />;
};

export default EnrollmentListContainer;
