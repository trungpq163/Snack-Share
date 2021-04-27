import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import routes from '../../../routes';

interface Props {
    enrollments: any[];
    handleDelete: any;
}

const Enrollments = ({ enrollments, handleDelete }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <Link
                    className="link-action__category"
                    style={{ fontSize: '1.66rem', cursor: 'pointer' }}
                    to={routes.createEnrollment}
                >
                    {t('enrolledStudent.createEnrollment')}
                </Link>
            </div>
            <table className="table" style={{ width: '70%' }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{t('enrolledStudent.studentEmail')}</th>
                        <th scope="col">{t('enrolledStudent.courseTitle')}</th>
                        <th scope="col">{t('enrolledStudent.action')}</th>
                    </tr>
                </thead>
                <tbody>
                    {enrollments?.map((enrollment, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{enrollment?.student?.email}</td>
                            <td>{enrollment?.course?.courseName}</td>
                            <td>
                                <button onClick={() => handleDelete(enrollment?._id)}>
                                    {t('enrolledStudent.delete')}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Enrollments;
