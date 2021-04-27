import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './SearchInput.Styles.css';

const SearchInput = ({ values, onChange, name }: any) => {
    const { t } = useTranslation();
    return (
        <div className="search-form">
            <i className="fal fa-search search-form__icon" />
            <input
                type="text"
                placeholder={t('users.search')}
                className="search-form__input"
                name={name}
                onChange={onChange}
                value={values}
            />
        </div>
    );
};

export default SearchInput;
