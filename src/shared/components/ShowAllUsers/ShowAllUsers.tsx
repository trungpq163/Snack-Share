/* eslint-disable camelcase */
import * as React from 'react';
import 'components/ShowCategory/ShowCategory.Styles.css';

import SearchInput from 'components/SearchInput/SearchInput';

const ShowAllUsers = ({ users, handleISODateToString, values, handleChange }: any) => {
    console.log('dataUsers', users);
    console.log('inputSearch', values);
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
            <SearchInput
                values={values?.inputValue}
                onChange={handleChange('inputValue')}
                name="inputValue"
            />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Action</th>
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
                                    <a
                                        className="link-action__category"
                                        href={'/ShowCategoryList/edit/'}
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

export default ShowAllUsers;
