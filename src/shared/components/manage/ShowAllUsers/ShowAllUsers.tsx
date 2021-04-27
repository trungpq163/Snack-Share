/* eslint-disable camelcase */
import * as React from 'react';
import '../../../components/manage/Categories/Categories.Styles.css';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchInput from '../../../components/common/SearchInput/SearchInput';

const ShowAllUsers = ({ users, handleISODateToString, values, handleChange }: any) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <SearchInput
                values={values?.inputValue}
                onChange={handleChange('inputValue')}
                name="inputValue"
            />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{t('users.firstName')}</th>
                        <th scope="col">{t('users.lastName')}</th>
                        <th scope="col">{t('users.email')}</th>
                        <th scope="col">{t('users.role')}</th>
                        <th scope="col">{t('users.createdAt')}</th>
                        <th scope="col">{t('users.action')}</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        ?.filter((x: any) =>
                            values?.inputValue !== '' ? x.first_name === values?.inputValue : x
                        )
                        ?.map((user: any, index: any) => (
                            <tr key={index}>
                                <th scope="row">{index || 0}</th>
                                <td>{user?.first_name || ''}</td>
                                <td>{user?.last_name || ''}</td>
                                <td>{user?.email || ''}</td>
                                <td>{user?.role || ''}</td>
                                <td>{handleISODateToString(user?.created_at) || '1/1/2020'}</td>
                                <td>
                                    <Link
                                        className="link-action__category"
                                        to={`/users/edit/${user?._id}`}
                                    >
                                        {t('users.edit')}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllUsers;
