"use client";

import { createUser } from "@/lib/actions";

export default function Form() {
  return (
    <form action={createUser}>
      <div>
        <label htmlFor="userName"> user name </label>
        <input
          id="userName"
          name="userName"
          type="text"
          placeholder="Enter userName"
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="email" placeholder="Enter email" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}
