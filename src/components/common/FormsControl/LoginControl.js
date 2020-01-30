import React from 'react';
import styles from './LoginControl.module.css';

const LoginControl = ({input, meta, child, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={styles.loginControl + " " + (hasError ? styles.error : styles.inputField
          && meta.active ? styles.inputActiveBorder : styles.inputField
          && meta.valid ? styles.validBorder : styles.inputField)}>
        {props.children}
      </div>
      {hasError && <span className={styles.errorText}>{meta.error}</span>}
    </div>
  )
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <LoginControl {...props}>
    <p className={input.value.length > 0 ? styles.loginControl + " " + styles.visible : styles.hidden}>{props.placeholder}</p>
  <input className={input.name}{...input} {...restProps}/></LoginControl>
}

export const Section = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <LoginControl {...props}>
    <p className={input.value.length > 0 ? styles.loginControl + " " + styles.visible : styles.hidden}>{props.placeholder}</p>
    <select {...input} {...restProps} className={input.value === "" ? input.name +" "+ styles.firstOption : input.name}/></LoginControl>
}
