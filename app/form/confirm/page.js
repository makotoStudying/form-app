"use client";
import { useRouter } from "next/navigation";
import { useDataContext } from "../../context/dataContext";
import Confirm from "../../ui/confirm";
import { fetchForm } from "../../lib/actions";

export default function Page() {
  const router = useRouter();
  const { data, setData } = useDataContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchForm(data);
    router.push("/form/thanks");
  };

  return (
    <Confirm
      data={data}
      onSubmit={handleSubmit}
      handleClickBack={() => router.push("/form/input")}
    />
  );
}
