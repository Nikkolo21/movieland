import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import Input from '../Input';

export default function Form(props) {
    const { formElem, onSubmit, errorMessage } = props;
    const { register, handleSubmit, errors } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                formElem.map(elem => 
                <Input
                    key={elem.id}
                    minLength={elem.minLenght}
                    maxLength={elem.maxLenght}
                    errors={errors[`${elem.name}`]}
                    inputRef={register({
                        minLength: elem.minLenght,
                        maxLength: elem.maxLenght,
                        required: elem.required,
                        pattern: elem.pattern
                    })}
                    inputName={elem.name}
                    title={elem.title}
                    inputType={elem.inputType}
                    type={elem.type}
                    placeholder={elem.placeholder}
                />)
            }

            {
                errorMessage && errorMessage.map(elem =>
                    <p><small className="error">{elem}</small></p>
                )
            }
            <div style={{textAlign: 'center'}}>
                <Button variant="contained" size="medium" color="primary" type="submit">
                    Guardar
                </Button>
            </div>
        </form>
    )
}
