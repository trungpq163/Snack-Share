import { toastErrorNotify } from '../utils/toast';
import { dispatchSetCurrentUser } from '../store/auth/effects';
import { getCurrentProfile, getAllProfiles } from '../store/profile/effects';
import { getCategory } from '../store/category/effects';
import { getAllCourses } from '../store/courses/effects';
import { getAllEnrollments } from '../store/enrollment/effects';
import { getAllUsers } from '../store/users/effects';

export default (dispatch: any, decoded: any) => {
    console.log('decoded with love', decoded);
    dispatch(dispatchSetCurrentUser(decoded as any));
    dispatch(getCurrentProfile());
    dispatch(getCategory());
    dispatch(getAllCourses());
    dispatch(getAllProfiles((err: string) => toastErrorNotify(err)));
    dispatch(getAllEnrollments());
    if (decoded.role === 'admin') {
        dispatch(getAllUsers());
    }
};
