"use client";

import InputText from "./component/inputText";

export const InputForm = ({ key, data, onSubmit, onChange }) => (
  <form key={key} onSubmit={onSubmit}>
    <InputText
      label="firstName"
      id="firstName"
      type="text"
      value={data.firstName}
      onChange={onChange}
      required={true}
      maxLength={10}
    />
    <InputText
      label="lastName"
      id="lastName"
      type="text"
      value={data.lastName}
      onChange={onChange}
      required={true}
      maxLength={10}
    />
    <InputText
      label="email"
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
