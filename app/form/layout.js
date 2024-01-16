"use client";
import { createContext, useState } from "react";

export const DataContext = createContext({});

export default function Layout({ children }) {
  const [data, setData] = useState({ firstName: "", lastName: "", email: "" });
  return (
    <DataContext.Provider value={{ data, setData }}>
      <main>
        <div>{children}</div>
      </main>
    </DataContext.Provider>
  );
}
