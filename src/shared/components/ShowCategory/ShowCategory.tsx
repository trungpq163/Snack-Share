import * as React from 'react';

const ShowCategory = ({ category }: any) => {
    console.log('category', category);
    return (
        <div
            style={{
                fontFamily: 'Poppins, sans-serif',
                marginTop: '6%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>{'Category List :<'}</h3>
            </div>
        </div>
    );
};

export default ShowCategory;
