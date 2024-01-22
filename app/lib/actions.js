"use server";

import { z } from "zod";
import { redirect } from "next/navigation";

const userSchema = z.object({
  userName: z.string(),
  email: z.string().email(),
});

export async function createUser(formData) {
  const { userName, email } = userSchema.parse({
    userName: formData.get("userName"),
    email: formData.get("email"),
  });
  console.log({ userName: userName, email: email });
  redirect("/");
}
