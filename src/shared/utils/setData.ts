import { toast } from 'react-toastify';
import { dispatchSetCurrentUser } from 'store/auth/effects';
import { getCurrentProfile, getAllProfiles } from 'store/profile/effects';
import { getCategory } from 'store/category/effects';
import { getAllCourses } from 'store/courses/effects';
import { getAllEnrollments } from 'store/enrollment/effects';
import { getAllUsers } from 'store/users/effects';

export default (dispatch: any, decoded: any) => {
    dispatch(dispatchSetCurrentUser(decoded as any));
    dispatch(getCurrentProfile());
    dispatch(getAllProfiles((err: string) => toast(err)));
    dispatch(getCategory());
    dispatch(getAllCourses());
    dispatch(getAllEnrollments());
    dispatch(getAllUsers());
};
