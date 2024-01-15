"use client";
import { useState } from "react";
import Form from "./ui/form";
import Input from "./ui/input";
import { checkForm, fetchInputForm } from "./lib/actions";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("inputPage");

  switch (status) {
    case "inputPage":
      return (
        <main>
          <div>
            <Form action={checkForm}>
              <Input
                label="First Name"
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required={true}
                maxLength={10}
              />
              <Input
                label="Last Name"
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required={true}
                maxLength={10}
              />
              <Input
                label="e-mail"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">next</button>
            </Form>
          </div>
        </main>
      );

    case "confirmPage":
      return (
        <main>
          <div>
            <div>
              <p>First Name: {firstName}</p>
              <p>Last Name: {lastName}</p>
              <p>e-mail: {email}</p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setStatus("inputPage");
                }}
              ></button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setStatus("inputPage");
                }}
              >
                prev
              </button>
              <button
                type="button"
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    await fetchInputForm();
                    setStatus("thanksPage");
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                send
              </button>
            </div>
          </div>
        </main>
      );

    case "thanksPage":
      return (
        <main>
          <div>
            <p>Thank you!</p>
          </div>
        </main>
      );
  }
}
