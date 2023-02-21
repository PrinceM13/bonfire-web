import { useState } from "react";

import * as authApi from "../../api/auth-api";
import Input from "../../components/Input";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: "",
  password: "",
  confirmPassword: ""
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // might need data validation
    await authApi.register(input);
    // clean up
    setInput(initialInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div>
          <Input
            placeholder="Firstname"
            name={"firstName"}
            value={input.firstName}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Input
            placeholder="Lastname"
            name={"lastName"}
            value={input.lastName}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            name={"email"}
            value={input.email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Input
            placeholder="Mobile"
            name={"phone"}
            value={input.phone}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Input
            type="date"
            placeholder="Birth date"
            name={"birthDate"}
            value={input.birthDate}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            name={"password"}
            value={input.password}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Confirm password"
            name={"confirmPassword"}
            value={input.confirmPassword}
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex justify-center">
          <div className="flex gap-4">
            <input type="checkbox" className="default:ring-2" />
            <span>please read the condition before create account</span>
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <button
            type="submit"
            className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 rounded-full w-[90vw] text-white font-bold shadow-md"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
