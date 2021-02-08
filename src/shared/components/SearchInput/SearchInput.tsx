import * as React from 'react';
import './SearchInput.Styles.css';

const SearchInput = () => {
    return (
        <div className="search-form">
            <i className="fal fa-search search-form__icon" />
            <input type="text" placeholder="Search" className="search-form__input" />
        </div>
    );
};

export default SearchInput;
