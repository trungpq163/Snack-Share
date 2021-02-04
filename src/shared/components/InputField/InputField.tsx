import * as React from 'react';
import './InputField.Styles.css';

const InputField = ({ name }: any) => {
    return <input type="text" className="input-focus" placeholder={name} />;
};

export default InputField;
