/* eslint-disable prefer-const */
import * as React from 'react';

import { useSelector } from 'react-redux';
import { getUsers } from 'store/users/selectors';

import ShowAllUsers from 'components/ShowAllUsers/ShowAllUsers';
import CircleLoader from 'components/CircleLoader/CircleLoader';

const ShowAllUsersContainer = () => {
    const users = useSelector(getUsers);
    const handleISODateToString = (isoDate: string = ''): string => {
        const date = new Date(isoDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = Number('0' + dt);
        }

        if (month < 10) {
            month = Number('0' + month);
        }

        return `${year}/${month}/${dt}`;
    };

    return (
        <>
            {users.loading ? (
                <CircleLoader />
            ) : (
                <ShowAllUsers users={users?.users} handleISODateToString={handleISODateToString} />
            )}
        </>
    );
};

export default ShowAllUsersContainer;
