"use client";
import { useRouter } from "next/navigation";
import { useDataContext } from "../../context/dataContext";
import InputForm from "../../ui/inputForm";

export default function Page() {
  const router = useRouter();
  const { data, setData } = useDataContext();

  const handleChange = (e) => {
    const id = e.target.id;
    switch (id) {
      case "firstName":
        setData({ ...data, firstName: e.target.value });
        return;
      case "lastName":
        setData({ ...data, lastName: e.target.value });
        return;
      case "email":
        setData({ ...data, email: e.target.value });
        return;
    }
  };

  return (
    <InputForm
      key="input"
      data={data}
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/form/confirm");
      }}
      onChange={handleChange}
    />
  );
}
