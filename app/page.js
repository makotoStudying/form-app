import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/form">
          <button type="button">フォーム</button>
        </Link>
      </div>
    </main>
  );
}
