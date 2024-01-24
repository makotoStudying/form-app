import Link from "next/link";

export default function Page() {
  return (
    <main>
      <p>thank you!</p>
      <Link href="/">
        <button type="button">back to home</button>
      </Link>
    </main>
  );
}
