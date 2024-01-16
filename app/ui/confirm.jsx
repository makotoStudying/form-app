"use client";

export default function Confirm({ key, data, action, handleClickBack }) {
  return (
    <form key={key} action={action}>
      {Object.keys(data).map((key) => (
        <p key={key}>
          {key}: {data[key]}
        </p>
      ))}
      <button type="button" onClick={handleClickBack}>
        Back
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
