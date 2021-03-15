import * as React from 'react';
import './InputDropdown.Styles.css';
import '../InputField/InputField.Styles.css';

// error
const InputDropdown = ({ name, value, info, onChange, options, require }: any) => {
    const selectOption = options.map(
        (option: { value: string | number | string[] | undefined; label: any }) => (
            <option value={option.value} key={option.label}>
                {option.label}
            </option>
        )
    );

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
                {info}
            </p>
            <select
                className="form-control form-control-lg input-focus"
                name={name}
                onChange={onChange}
                value={value}
                required={require}
            >
                {selectOption}
            </select>
        </>
    );
};

export default InputDropdown;
