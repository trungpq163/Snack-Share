import { Category } from './types';

export const ActionTypes = {
    GET_CATEGORY: 'GET_CATEGORY',
    CATEGORY_LOADING: 'CATEGORY_LOADING',
};

export const getCategory = (category: Category) => ({
    type: ActionTypes.GET_CATEGORY,
    payload: category,
});

export const setCategoryLoading = () => ({
    type: ActionTypes.CATEGORY_LOADING,
});
