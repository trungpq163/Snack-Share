import * as React from 'react';
import { useDispatch } from 'react-redux';
import ManageYourStudent from '../../../components/manage/ManageYourStudent/ManageYourStudent';
import {
    deleteEnrollmentsInstructorByID,
    getAllEnrollments,
} from '../../../store/enrollment/effects';
import { toastErrorNotify, toastSuccessNotify } from '../../../utils/toast';

interface Props {
    enrollments: any;
    idInstructor: string;
    idCourse: string;
}

const ManageYourStudentContainer = ({ enrollments, idInstructor, idCourse }: Props) => {
    const dispatch = useDispatch();
    const handleDelete = (id: string) => {
        dispatch(
            deleteEnrollmentsInstructorByID(
                id,
                (err: any) => toastErrorNotify(err),
                (mess: string) => toastSuccessNotify(mess),
                () => dispatch(getAllEnrollments())
            )
        );
    };

    const enrollmentsByIdInstructor = enrollments
        .filter(
            (enrollment: any, _index: number) => enrollment.course.instructor._id === idInstructor
        )
        .filter((enrollment: any, _index: number) => enrollment.course._id === idCourse);

    return (
        <ManageYourStudent enrollments={enrollmentsByIdInstructor} handleDelete={handleDelete} />
    );
};

export default ManageYourStudentContainer;
