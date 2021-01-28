import * as React from 'react';
import { FilterStyles } from '../../styles/Filter.Styles';
import { HeaderStyles } from './Header.Styles';

const Header = () => {
    return (
        <>
            <HeaderStyles>
                <div className="container">
                    <h1 className="heading">
                        Snack<strong>Dev</strong>
                    </h1>
                    <p className="slogan">Share all knowledge we have with 😘</p>
                </div>
            </HeaderStyles>
            <FilterStyles>
                <span className="filter-item active">Home</span>
                <span className="filter-item">Login</span>
                <span className="filter-item">Teach On SnackDev</span>
            </FilterStyles>
        </>
    );
};

export default Header;
