import { dispatchSetCurrentUser } from 'store/auth/effects';
import { getCurrentProfile } from 'store/profile/effects';

export default (dispatch: any, decoded: any) => {
    dispatch(dispatchSetCurrentUser(decoded as any));
    dispatch(getCurrentProfile());
};
