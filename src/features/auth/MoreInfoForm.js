import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import VerticalSpace from "../../components/VerticalSpace";
import { registerWithGoogle } from "../../redux/auth-slice";

export default function MoreInfoForm() {
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const dispatch = useDispatch();
  const googleInfo = useSelector((state) => state.auth.googleInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    // might need data validation
    dispatch(registerWithGoogle({ ...googleInfo, phone, birthDate }));
    // clean up
    setPhone("");
    setBirthDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-[75%]">
      <Input
        placeholder="Mobile"
        name={"phone"}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        type="date"
        placeholder="Birth date"
        name={"birthDate"}
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <VerticalSpace />
      <button
        type="submit"
        className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 rounded-full text-white font-bold shadow-md"
      >
        Submit to Login
      </button>
    </form>
  );
}
