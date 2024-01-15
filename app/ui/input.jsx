"use client";

const Input = ({ label, id, type, value, onChange, ...props }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} value={value} onChange={onChange} {...props} />
  </>
);

export default Input;
