"use client";
import { createContext, useState, useContext } from "react";

const defaultProvider = {
  data: [],
  setData: () => [],
};

const DataContext = createContext(defaultProvider);

export function useDataContext() {
  return useContext(DataContext);
}

export default function DataProvider({ children }) {
  const [data, setData] = useState({ firstName: "", lastName: "", email: "" });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
