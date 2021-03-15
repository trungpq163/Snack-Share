import * as React from 'react';

import './CircleLoader.Styles.css';

// interface Props {
//     size?: any;
//     isButton?: boolean;
// }
// { size, isButton }: Props
const CircleLoader = () => {
    return (
        <div
            className="circle-loading2"
            style={{
                marginTop: '10%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div />
            <div />
        </div>
    );
};

export default CircleLoader;
