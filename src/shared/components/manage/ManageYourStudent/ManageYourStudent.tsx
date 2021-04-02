import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    enrollments: any;
    handleDelete: any;
}

const ManageYourStudent = ({ enrollments, handleDelete }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h2 className="link-action__category">{enrollments[0]?.course?.courseName}</h2>
            </div>
            <table className="table" style={{ width: '70%' }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{`${t('manageYourStudent.studentEmail')}`}</th>
                        <th scope="col">{`${t('manageYourStudent.courseTitle')}`}</th>
                        <th scope="col">{`${t('manageYourStudent.action')}`}</th>
                    </tr>
                </thead>
                <tbody>
                    {enrollments?.map((enrollment: any, index: number) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{enrollment?.student?.email}</td>
                            <td>{enrollment?.course?.courseName}</td>
                            <td>
                                <button onClick={() => handleDelete(enrollment?._id)}>
                                    {`${t('manageYourStudent.delete')}`}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageYourStudent;
