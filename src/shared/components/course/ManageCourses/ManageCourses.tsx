import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';

import '../../manage/ShowCategory/ShowCategory.Styles.css';

interface Props {
    idInstructor: string;
}

const ManageCourses = ({ idInstructor }: Props) => {
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <Link
                    className="link-action__category"
                    style={{ fontSize: '1.66rem', cursor: 'pointer' }}
                    to={`/addcourse/${idInstructor}`}
                >
                    Add Course
                </Link>
            </div>
        </div>
    );
};

export default ManageCourses;
