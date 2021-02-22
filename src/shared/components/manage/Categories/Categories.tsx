import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';

import './Categories.Styles.css';

const Categories = ({ category }: any) => {
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <Link
                    className="link-action__category"
                    style={{ fontSize: '1.66rem', cursor: 'pointer' }}
                    to={routes.createCategory}
                >
                    Add Category
                </Link>
            </div>
            <table className="table" style={{ width: '70%' }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {category?.map((child: any, index: any) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{child?.categoryName}</td>
                            <td>
                                <Link
                                    className="link-action__category"
                                    to={`/categories/edit/${child?._id}`}
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Categories;
