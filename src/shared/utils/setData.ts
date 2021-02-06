import { dispatchSetCurrentUser } from 'store/auth/effects';
import { getCurrentProfile } from 'store/profile/effects';
import { getCategory } from 'store/category/effects';

export default (dispatch: any, decoded: any) => {
    dispatch(dispatchSetCurrentUser(decoded as any));
    dispatch(getCurrentProfile());
    dispatch(getCategory());
};
