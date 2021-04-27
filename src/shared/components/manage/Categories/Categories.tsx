import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import routes from '../../../routes';

import './Categories.Styles.css';

const Categories = ({ category }: any) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <Link
                    className="link-action__category"
                    style={{ fontSize: '1.66rem', cursor: 'pointer' }}
                    to={routes.createCategory}
                >
                    {t('categories.addCategory')}
                </Link>
            </div>
            <table className="table" style={{ width: '70%' }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{t('categories.category')}</th>
                        <th scope="col">{t('categories.action')}</th>
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
                                    {t('categories.edit')}
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
