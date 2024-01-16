"use client";
import { useRouter } from "next/navigation";
import { useDataContext } from "../layout";
import Confirm from "../../ui/confirm";
import { fetchForm } from "../../lib/actions";

export default function Page() {
  const router = useRouter();
  const { data, setData } = useDataContext();

  const action = async () => {
    await fetchForm(data);
    setData({ firstName: "", lastName: "", email: "" });
    router.push("/form/thanks");
  };

  return (
    <Confirm
      key="confirm"
      data={data}
      action={action}
      handleClickBack={() => router.push("/form/input")}
    />
  );
}
