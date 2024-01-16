"use client";
import { createContext, useContext, useState } from "react";

const DataContext = createContext({});

export function useDataContext() {
  return useContext(DataContext);
}

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
