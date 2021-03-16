import * as React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../routes';

interface Props {
    enrollments: any[];
    handleDelete: any;
}

const Enrollments = ({ enrollments, handleDelete }: Props) => {
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <Link
                    className="link-action__category"
                    style={{ fontSize: '1.66rem', cursor: 'pointer' }}
                    to={routes.createEnrollment}
                >
                    Create Enrollment
                </Link>
            </div>
            <table className="table" style={{ width: '70%' }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Email</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Action</th>
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
                                    delete
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
