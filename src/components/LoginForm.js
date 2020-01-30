import React from 'react';
import { Field } from 'redux-form';

import { Input, Section} from './common/FormsControl/LoginControl';
import { required, validateEmail, validatePhone, validateName, validatePassword, validatePasswordConfirm } from '../utils/validators/LoginValidator';
import Codes from './Codes';

function LoginForm(props) {
  return (
    <form className="login-form" onSubmit={props.handleSubmit}>
      <div className="login-form_title"><h3>Sign up</h3></div>
      <div>
        <Field name="Name" placeholder="Name" component={Input} validate={[required, validateName]}/>
      </div>
      <div className="fponeBlock">
        <Field name="Code" placeholder="Code" component={Section} validate={[required]}>
          <option  value='' disabled selected>Code</option>
          {Codes.map(item =>
            <option key={item.name + item.code} value={item.dial_code}>
              {item.dial_code + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0"+ item.name}
            </option>
          )}
        </Field>
        <Field name="Phone" placeholder="Phone number" component={Input} validate={[required, validatePhone]}/>
      </div>
      <div>
        <Field name="Email" placeholder="Email address" component={Input} validate={[required, validateEmail]}/>
      </div>
      <div>
        <Field name="Country" placeholder="Select country" component={Section} validate={[required]}>
          <option  value='' disabled selected>Select country</option>
          {Codes.map(item =>
            <option key={item.name + item.code} value={item.name}>
              {item.name}
            </option>
          )}
        </Field>
      </div>
      <div>
        <Field name="Password" placeholder="Password" component={Input} validate={[required, validatePassword]}
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
      </div>
      <div>
        <Field name="Confirm" placeholder="Confirm password" component={Input} validate={[required, validatePasswordConfirm]}/>
      </div>
      <div className="agreeCheckbox">
        <label>
          <Field name="Agree" type="checkbox" component="input"/>
          <span>  Yes, I'd like to recieve the very occasional email with information on new services and discounts</span>
        </label>
      </div>
      <div className="create-account">
        <button>Create an account</button>
      </div>
      <div className="form-footer">
        <p>Already have a 24Slides account?
          <a href="#">Click here</a>
          to log in to your existing account and join a company team</p>
      </div>
    </form>
  )
}

export default LoginForm;
