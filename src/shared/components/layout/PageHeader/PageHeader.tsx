import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../../styles/InnerBanner.Styles.css';

interface Props {
    title?: string;
    loading?: boolean;
}

const PageHeader = ({ title, loading }: Props) => {
    const { t } = useTranslation();
    return (
        <section className="inner-banner">
            <div className="container">
                {!loading ? (
                    <>
                        <ul className="list-unstyled thm-breadcrumb">
                            <li>
                                <Link to="/">{`${t('breadcrumb.home')}`}</Link>
                            </li>
                            <li className="active">
                                <a href="#none">{title}</a>
                            </li>
                        </ul>
                        <h2 style={{ paddingBottom: '1rem' }} className="inner-banner__title">
                            {title}
                        </h2>
                    </>
                ) : (
                    <h2 className="inner-banner__title">LOADING...........</h2>
                )}
            </div>
        </section>
    );
};

export default PageHeader;
