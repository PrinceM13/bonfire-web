import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../redux/auth-slice";
import Input from "../../components/Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // might need data validation
    dispatch(login(email, password));
    // clean up
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col text-center">
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-center">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          type="submit"
          className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 rounded-full w-[90vw] text-white font-bold shadow-md"
        >
          Log In
        </button>
      </div>
    </form>
  );
}
