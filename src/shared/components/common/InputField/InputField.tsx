import * as React from 'react';
import './InputField.Styles.css';

const InputField = ({
    name,
    text,
    onChange,
    value,
    placeholder,
    type,
    acceptFile,
    inputNumber,
    disabled,
    required,
}: any) => {
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
            <input
                type={type || 'text'}
                name={name}
                onChange={onChange}
                value={value}
                accept={acceptFile}
                onInput={() => inputNumber}
                className="input-focus"
                placeholder={placeholder}
                disabled={disabled}
                required={required || false}
            />
        </>
    );
};

export default InputField;
