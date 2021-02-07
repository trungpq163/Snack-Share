import React from 'react';
import CircleLoader from 'components/CircleLoader/CircleLoader';
// import { HeaderStyles } from '../Header/Header.Styles';

const HeaderLoader = () => {
    return (
        <>
            {/* <HeaderStyles>
                <div className="container">
                    <h1 className="heading">
                        Snack<strong>Dev</strong>
                    </h1>
                    <p className="slogan">Share all knowledge we have with 😘</p>
                </div>
            </HeaderStyles> */}

            <div className="filter">
                <CircleLoader />
            </div>
        </>
    );
};

export default HeaderLoader;
