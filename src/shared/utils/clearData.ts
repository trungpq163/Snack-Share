import { dispatchSetCurrentUser } from 'store/auth/effects';
import { clearCurrentProfile } from 'store/profile/action';

export default (dispatch: any, data: any) => {
    dispatch(dispatchSetCurrentUser(data as any));
    dispatch(clearCurrentProfile());
};
