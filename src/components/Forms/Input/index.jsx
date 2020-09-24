import React from 'react';
import './Input.scss';

export default function Input(props) {
    const {
        defaultValue="",
        title="",
        placeholder="",
        type="primary",
        inputType="text",
        inputName="",
        minLength="",
        maxLength="",
        inputRef= () => {},
        errors=false,
        max,
        step
    } = props;

    return (
        <div className="input-box">
            <span>{title}</span>
            <input name={inputName} defaultValue={defaultValue} className={`input input-${type}`} type={inputType} placeholder={placeholder} ref={inputRef} max={max} step={step} />
            {errors && errors.type === "required" && <small className="error">Es requerido</small>}
            {errors && errors.type === "pattern" && <small className="error">Verifica el campo</small>}
            {errors && errors.type === "minLength" && <small className="error">Tamaño mínimo: {minLength}</small>}
            {errors && errors.type === "maxLength" && <small className="error">Tamaño máximo: {maxLength}</small>}
        </div>
    )
}
