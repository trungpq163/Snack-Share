import * as React from 'react';
import { Link } from 'react-router-dom';
import 'styles/InnerBanner.Styles.css';
interface Props {
    title?: string;
}

const PageHeader = ({ title }: Props) => {
    return (
        <section className="inner-banner">
            <div className="container">
                <ul className="list-unstyled thm-breadcrumb">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="active">
                        <a href="#none">{title}</a>
                    </li>
                </ul>
                <h2 className="inner-banner__title">{title}</h2>
            </div>
        </section>
    );
};

export default PageHeader;
