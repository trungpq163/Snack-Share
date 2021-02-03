import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLocale } from 'store/app/actions';
import { Locale } from 'store/app/types';
import Introduction from '../../components/Introduction/Introduction';
import Partners from '../../components/Partners/Partners';
import CourseOne from '../../components/CourseOne/CourseOne';

const App: React.FC<any> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const handleLocaleChange = useCallback(
        (e: React.FormEvent<HTMLButtonElement>) => {
            dispatch(setLocale(e.currentTarget.value as Locale));
        },
        [dispatch]
    );

    return (
        <React.Fragment>
            <Introduction />
            <CourseOne />
            <Partners />
            {/* <h2>{t('i18n-example')}</h2>
            <p>
                <button value="de_DE" onClick={handleLocaleChange}>
                    Deutsch
                </button>
                <button value="en_US" onClick={handleLocaleChange}>
                    English
                </button>
            </p> */}
        </React.Fragment>
    );
};

export default App;
