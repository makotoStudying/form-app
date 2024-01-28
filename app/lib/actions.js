"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  content: z.string(),
});

const resend = new Resend(process.env.Resend_API_KEY);

export async function postContactForm(formData) {
  const { name, email, content } = contactFormSchema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    content: formData.get("content"),
  });

  const data = await resend.emails.send({
    from: "autoreply@makoto-no-blog.net",
    to: `${email}`,
    bcc: process.env.MyAddress,
    subject: "お問い合わせありがとうございます",
    text: `お問い合わせ内容を受理いたしました。\n\n***************\nユーザー名: ${name}\nメールアドレス: ${email}\nお問い合わせ内容:\n ${content}`,
  });
  if (data.error !== null) {
    throw new Error(data.error.message);
  }

  redirect("/form/thanks");
}
