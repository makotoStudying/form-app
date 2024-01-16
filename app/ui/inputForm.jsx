"use client";

import InputText from "./component/inputText";

export const InputForm = ({ data, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <InputText
      label="First Name"
      id="firstName"
      type="text"
      value={data.firstName}
      onChange={onChange}
      required={true}
      maxLength={10}
    />
    <InputText
      label="Last Name"
      id="lastName"
      type="text"
      value={data.lastName}
      onChange={onChange}
      required={true}
      maxLength={10}
    />
    <InputText
      label="e-mail"
      id="email"
      type="email"
      value={data.email}
      onChange={onChange}
      required={true}
    />
    <button type="submit">next</button>
  </form>
);

export default InputForm;
