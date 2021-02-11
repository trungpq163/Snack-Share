import * as React from 'react';
import '../InputField/InputField.Styles.css';

const TextAreaField = ({ name, text, placeholder, onChange, value }: any) => {
    return (
        <>
            <p
                style={{
                    margin: '3px',
                    padding: 0,
                    color: '#999999',
                    fontSize: '0.666rem',
                    fontWeight: 'lighter',
                }}
            >
                {text}
            </p>
            <textarea
                className="input-focus"
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
            />
        </>
    );
};

export default TextAreaField;
