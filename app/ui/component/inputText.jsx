"use client";

const InputText = ({ label, id, type, value, onChange, ...props }) => (
  <div>
    <label htmlFor={id}>{label}:</label>
    <input id={id} type={type} value={value} onChange={onChange} {...props} />
  </div>
);

export default InputText;
