"use client";

export const Confirm = ({ data, handleClickPrev, handleClickSubmit }) => (
  <div>
    {Object.keys(data).map((id) => (
      <p key={id}>{data[id]}</p>
    ))}
    <button type="button" onClick={handleClickPrev}>
      prev
    </button>
    <button type="button" onClick={handleClickSubmit}>
      submit
    </button>
  </div>
);

export default Confirm;
