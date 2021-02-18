import * as React from 'react';
import { Link } from 'react-router-dom';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

import './Courses.Styles.css';

const Courses = ({ lectures, loading, pathName }: any) => {
    console.log(lectures);
    return (
        <>
            {loading ? (
                <CircleLoader />
            ) : (
                <div className="block__header">
                    <table className="table" style={{ width: '80%' }}>
                        <thead>
                            <tr>
                                <th>Lesson</th>
                                <th>Description</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {lectures?.map((lecture: any, index: number) => (
                                <tr key={index}>
                                    <td>{lecture?.title}</td>
                                    <td>{lecture?.course?.courseDescription}</td>
                                    <td>
                                        {' '}
                                        <Link
                                            className="link-action__category"
                                            to={`${pathName}/lessons/${lecture?._id}`}
                                        >
                                            Watch now
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default Courses;
