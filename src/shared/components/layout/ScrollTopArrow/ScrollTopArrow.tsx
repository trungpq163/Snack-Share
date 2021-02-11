import React, { useState, useEffect } from 'react';

const ScrollTopArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop);
        };
    });

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        }

        if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className="back-to-top"
            onClick={scrollTop}
            style={{
                display: showScroll ? 'flex' : 'none',
            }}
        >
            <i className="fal fa-arrow-up" />
        </div>
    );
};

export default ScrollTopArrow;
