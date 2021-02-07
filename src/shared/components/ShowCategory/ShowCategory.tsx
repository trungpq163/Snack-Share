import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import './ShowCategory.Styles.css';

const ShowCategory = ({ category }: any) => {
    return (
        <div
            style={{
                fontFamily: 'Poppins, sans-serif',
                marginTop: '6%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="block-title" style={{ textAlign: 'center' }}>
                <Link
                    className="link-action__category"
                    style={{ fontSize: '1.66rem', cursor: 'pointer' }}
                    to={routes.createCategoryAdmin}
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
                                <a
                                    className="link-action__category"
                                    href={`/ShowCategoryList/edit/${child?._id}`}
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowCategory;
