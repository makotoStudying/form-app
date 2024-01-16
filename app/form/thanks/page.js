"use client";
import Link from "next/link";
import { useDataContext } from "../../context/dataContext";

export default function Thanks() {
  const { data, setData } = useDataContext();
  setData({ firstName: "", lastName: "", email: "" });
  return (
    <div>
      <p>Thank you!</p>
      <Link href="/form/input">
        <button>try again</button>
      </Link>
    </div>
  );
}
