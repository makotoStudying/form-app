import DataProvider from "../context/dataContext";

export default function Layout({ children }) {
  return (
    <DataProvider>
      <main>
        <div>{children}</div>
      </main>
    </DataProvider>
  );
}
