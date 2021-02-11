import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLocale } from 'store/app/actions';
import { Locale } from 'store/app/types';

import './LanguageButton.Styles.css';

const LanguageButton = () => {
    const [language, setLanguage] = React.useState('');
    const { i18n } = useTranslation();

    const dispatch = useDispatch();
    const handleLocaleChange = React.useCallback(
        (e: React.FormEvent<HTMLButtonElement>) => {
            dispatch(setLocale(e.currentTarget.value as Locale));
        },
        [dispatch]
    );

    React.useEffect(() => {
        setLanguage(
            i18n.language ||
                (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
                'en_US'
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language]);

    const classVN = language === 'vi_VN' ? 'active-language' : '';
    const classEN = language === 'en_US' ? 'active-language' : '';

    return (
        <p className="language-btn">
            <button value="vi_VN" className={classVN} onClick={handleLocaleChange}>
                vi
            </button>
            {'/'}
            <button value="en_US" className={classEN} onClick={handleLocaleChange}>
                en
            </button>
        </p>
    );
};

export default LanguageButton;
