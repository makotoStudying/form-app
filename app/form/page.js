import { createUser } from "@/lib/actions";

export default function Form() {
  return (
    <main>
      <h2> お問い合わせフォーム </h2>
      <form action={createUser}>
        <div>
          <div>
            <label htmlFor="name"> お名前 </label>
          </div>
          <div>
            <input id="name" name="name" type="text" placeholder="田中 太郎" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="email">メールアドレス</label>
          </div>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="xxx@example.com"
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="content">お問い合わせ内容</label>
          </div>
          <div>
            <textarea id="content" name="content" rows="5" placeholder="内容" />
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    </main>
  );
}
