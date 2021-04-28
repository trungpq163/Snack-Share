import { toastErrorNotify } from '../utils/toast';
import { dispatchSetCurrentUser } from '../store/auth/effects';
import { getCurrentProfile, getAllProfiles } from '../store/profile/effects';
import { getCategory } from '../store/category/effects';
import { getAllCourses } from '../store/courses/effects';
import { getAllEnrollments } from '../store/enrollment/effects';

export default (dispatch: any, decoded: any) => {
    dispatch(dispatchSetCurrentUser(decoded as any));
    dispatch(getCategory());
    dispatch(getAllCourses());
    dispatch(getAllEnrollments());

    if (decoded.role === 'admin' || decoded.role === 'instructor' || decoded.role === 'student') {
        dispatch(getCurrentProfile());
        dispatch(getAllProfiles((err: string) => toastErrorNotify(err)));
    }
};
