import { createSelector } from 'reselect';
import { CategoryState, Category } from './types';

export const category = (state: { category: CategoryState }): CategoryState => state.category;

export const getCategory = createSelector([category], (category): Category => category.category);
