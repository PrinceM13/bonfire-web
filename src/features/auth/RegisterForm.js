import { useEffect, useState } from "react";

import * as authApi from "../../api/auth-api";
import Input from "../../components/Input";
import useLoading from "../../hook/useLoading";
import validateRegister from "../../validators/register-validator";

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
  const [error, setError] = useState({});
  const [checkEmailArray, setCheckEmailArray] = useState([]);
  const { startLoading, stopLoading } = useLoading();
  useEffect(() => {
    const fetchEmail = async () => {
      const res = await authApi.checkEmail();
      // console.log(res.data.records);
      setCheckEmailArray(res.data.records);
    };
    fetchEmail();
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    const existEmail = checkEmailArray.filter((el) => el.email === input.email);
    if (existEmail.length !== 0) {
      setError({ ...error, email: "Email is already in use" });
    }
    if (existEmail.length === 0) {
      const newError = { ...error };
      delete newError.email;
      setError(newError);
    }
    // }, 100);
  }, [input.email]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      startLoading();
      e.preventDefault();
      // might need data validation
      const result = validateRegister(input);
      // input emai check
      const existEmail = checkEmailArray.filter((el) => el.email === input.email);
      if (existEmail.length !== 0) {
        result.email = "Email is already in use";
      }
      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input);
        // clean up
        setInput(initialInput);
      }
    } catch (err) {
      console.log("error", err?.response?.data?.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div>
          <Input
            placeholder="First Name"
            name={"firstName"}
            value={input.firstName}
            onChange={handleChangeInput}
            error={error.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Last Name"
            name={"lastName"}
            value={input.lastName}
            onChange={handleChangeInput}
            error={error.lastName}
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            name={"email"}
            value={input.email}
            onChange={handleChangeInput}
            error={error.email}
          />
        </div>
        <div>
          <Input
            placeholder="Mobile"
            name={"phone"}
            value={input.phone}
            onChange={handleChangeInput}
            error={error.phone}
          />
        </div>
        <div>
          <Input
            type="date"
            placeholder="Birth Date"
            name={"birthDate"}
            value={input.birthDate}
            onChange={handleChangeInput}
            error={error.birthDate}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            name={"password"}
            value={input.password}
            onChange={handleChangeInput}
            error={error.password}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Confirm Password"
            name={"confirmPassword"}
            value={input.confirmPassword}
            onChange={handleChangeInput}
            error={error.confirmPassword}
          />
        </div>
        <div className="flex justify-center">
          <div className="flex gap-2 mt-4">
            <input type="checkbox" className="default:ring-2" />
            <span className="text-xs font-bold">
              please read the condition before create account
            </span>
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
