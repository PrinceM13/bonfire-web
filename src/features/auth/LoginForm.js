import { useState } from "react";
import Input from "../../components/Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <div className="flex flex-col text-center">
        <Input
          className="w-full shadow rounded-full mb-2 border-2 p-1 px-2"
          placeholder="Your Email"
          name="email"
          // value={email}
        />
      </div>
      <div className="text-center">
        <Input
          className="w-full shadow rounded-full mb-2 border-2 p-1 px-2"
          type="password"
          placeholder="Password"
          name="password"
          // value={password}
        />
      </div>
      <div className="mt-2 flex justify-center">
        <button className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 rounded-full w-[90vw] text-white font-bold shadow-md">
          Log In
        </button>
      </div>
    </form>
  );
}
