import * as React from 'react';
import './CircleLoader.Styles.css';

interface Props {
    size?: any;
    isButton?: boolean;
}

const CircleLoader = ({ size, isButton }: Props) => {
    return (
        <div className="circle-loading2" style={{ marginTop: '5%' }}>
            <div />
            <div />
        </div>
    );
};

export default CircleLoader;
