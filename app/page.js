"use client";
import { useState } from "react";
import { fetchForm } from "./lib/actions";
import InputForm from "./ui/inputForm";
import Confirm from "./ui/confirm";
import Thanks from "./ui/thanks";

export default function Home() {
  const [status, setStatus] = useState("input");
  const [data, setData] = useState({ firstName: "", lastName: "", email: "" });

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

  //status==="input"でのフォームサブミット時の動作
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("confirm");
  };
  //status==="confirm"での戻るボタンクリックのイベントハンドラ
  const handleClickPrev = (e) => {
    e.preventDefault();
    setStatus("input");
  };
  //status==="confirm"での送信ボタンクリックのイベントハンドラ
  const handleClickSubmit = async (e) => {
    e.preventDefault();
    await fetchForm(data);
    setStatus("thanks");
  };

  return (
    <main>
      <div>
        {status === "input" && (
          <InputForm
            data={data}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        )}
        {status === "confirm" && (
          <Confirm
            data={data}
            handleClickPrev={handleClickPrev}
            handleClickSubmit={handleClickSubmit}
          />
        )}
        {status === "thanks" && <Thanks />}
      </div>
    </main>
  );
}
