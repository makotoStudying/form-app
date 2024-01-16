"use client";
import Link from "next/link";

export default function Thanks() {
  return (
    <div>
      <p>Thank you!</p>
      <Link href="/form/input">
        <button>try again</button>
      </Link>
    </div>
  );
}
