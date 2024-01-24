import Link from "next/link";

export default function Page() {
  return (
    <main>
      <p>something wrong!</p>
      <Link href="/form">
        <button type="button">try again!</button>
      </Link>
    </main>
  );
}
