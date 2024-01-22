"use client";

export default function Confirm({ data, action, handleClickBack }) {
  return (
    <form action={action}>
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
