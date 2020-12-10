import React, {Fragment} from 'react';
import {Field, reduxForm, SubmissionError} from "redux-form";
import './Form.scss';

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Необходимое поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неправильный e-mail'
    }
    if (!values.password) {
        errors.password = 'Необходимое поле'
        return errors
    }
    if (!values.offer) {
        errors.offer = 'Необходимое поле'
        return errors;
    }

}

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="login__field">
        <input {...input} placeholder={label} type={type} className="login__field-input"/>
        {touched && ((error && <span className="login__field-text-danger">{error}</span>) || (warning &&
            <span>{warning}</span>))}
        {!error && <span className="login__field-text-danger">{}</span>}
    </div>
)

const Checkbox = ({input, meta: {touched, error}}) => (
    <div style={{border: touched && error ? "1px solid red" : "none"}} className='login__form-checkbox-wrapper'>
        <input type="checkbox" {...input} />
        <label className='login__form-checkbox-label'>Cогласен с офертой</label>
    </div>
)


const LoginForm = ({handleSubmit, error, pristine, submitting, isLoading}) => {
    return (
        <form className='login__form' onSubmit={handleSubmit}>
            <h2 className='login__form-header'>Login</h2>
            <Field
                name="email"
                component={renderField}
                label='E-mail'
            />
            <Field
                name="password"
                component={renderField}
                label='Password'
                type='password'
            />

            <Field
                name="offer"
                component={Checkbox}
                label='Offer'
                type='checkbox'
            />

            <button className='login__form-submit-button' type='submit' disabled={pristine || submitting}>
                Войти
            </button>

        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login', validate})(LoginForm)

const Form = (props) => {
    const onSubmit = (formData) => {
        alert("Форма отправлена");
    }

    return <div className='login'>
        <LoginReduxForm onSubmit={onSubmit} isLoading={props.isLoading}/>
    </div>
}


export default Form;