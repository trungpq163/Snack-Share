import { Dispatch } from 'redux';
import axios, { AxiosRequestConfig } from 'axios';
import { setCurrentUser } from 'store/auth/action';
import { getProfile, getProfiles, setProfileLoading } from './action';
import { Action, Profile } from './types';

export const errorResponse = (errData: any): string | undefined => {
    const errRes =
        errData?.handle ||
        errData?.status ||
        errData?.skills ||
        errData?.website ||
        errData?.youtube ||
        errData?.twitter ||
        errData?.facebook ||
        errData?.linkedin ||
        errData?.instagram ||
        errData?.title ||
        errData?.company ||
        errData?.from ||
        '';
    return errRes;
};

export const getCurrentProfile = () => (dispatch: Dispatch<Action>) => {
    dispatch(setProfileLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: '/api/profile',
    };

    axios(config)
        .then((res) => dispatch(getProfile(res.data)))
        .catch((_err) => dispatch(getProfile({} as Profile)));
};

export const createProfile = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function,
    setData: any,
    redirectWhenSuccess: Function
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/api/profile',
        data: data,
    };

    axios(config)
        .then((_res) => {
            clearInput();
            setData();
            doneCb('Create profile successfully! <3');
            redirectWhenSuccess();
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err.response.data));
        });
};

export const addExperience = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function,
    setData: any,
    redirectWhenSuccess: Function
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/api/profile/experience',
        data: data,
    };

    axios(config)
        .then((_res) => {
            clearInput();
            setData();
            doneCb('Add Experience Successfully! <3');
            redirectWhenSuccess();
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err.response.data));
        });
};

export const addEducation = (
    data: any,
    errorCb: Function,
    doneCb: Function,
    clearInput: Function,
    redirectWhenSuccess: Function
) => (_dispatch: Dispatch<Action>) => {
    const config: AxiosRequestConfig = {
        method: 'post',
        url: '/api/profile/education',
        data: data,
    };

    axios(config)
        .then((_res) => {
            clearInput();
            doneCb('Add Education Successfully! <3');
            redirectWhenSuccess();
        })
        .catch((err) => {
            clearInput();
            errorCb(errorResponse(err.response.data));
        });
};

export const deleteExperience = (id: string, errorCb: Function, doneCb: Function) => (
    dispatch: Dispatch<Action>
) => {
    const config: AxiosRequestConfig = {
        method: 'delete',
        url: `/api/profile/education/${id}`,
    };

    axios(config)
        .then((res) => {
            dispatch(getProfile(res.data));
            doneCb('Delete Successfully! <3');
        })
        .catch((err) => errorCb(errorResponse(err.response.data)));
};

export const deleteEducation = (id: string, errorCb: Function, doneCb: Function) => (
    dispatch: Dispatch<Action>
) => {
    const config: AxiosRequestConfig = {
        method: 'delete',
        url: `/api/profile/education/${id}`,
    };

    axios(config)
        .then((res) => {
            dispatch(getProfile(res.data));
            doneCb('Delete Successfully! <3');
        })
        .catch((err) => errorCb(errorResponse(err.response.data)));
};

// Get all profiles
export const getAllProfiles = (errorCb: Function) => async (dispatch: Dispatch<Action>) => {
    await dispatch(setProfileLoading());
    const config: AxiosRequestConfig = {
        method: 'get',
        url: '/api/profile/all',
    };

    await axios(config)
        .then((res) => {
            dispatch(getProfiles(res.data));
        })
        .catch((_err) => {
            dispatch(getProfiles(null));
            errorCb('Error something when get all profiles');
        });
};

// Delete account & profile
export const deleteAccount = (doneCb: Function, errorCb: Function) => (
    dispatch: Dispatch<Action>
) => {
    const config: AxiosRequestConfig = {
        method: 'delete',
        url: '/api/profile',
    };

    axios(config)
        .then((_res) => {
            dispatch(setCurrentUser({}));
            doneCb('Delete Account successfully!');
        })
        .catch((err) => errorCb(errorResponse(err.response.data)));
};
