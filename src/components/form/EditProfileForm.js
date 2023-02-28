import UserIcon from "../../assets/icons/UserIcon";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function EditProfileForm() {
  const [input, setInput] = useState({
    username: "",
    bio: "",
    links: "",
    interest: "",
    birthDay: "",
    education: "",
    company: ""
  });
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  const InputEditProfile = ({ inputName, inputValue }) => (
    <input
      className="w-full border-b-2 bg-transparent focus:outline-none border-[#6A6A6A] h-8 pl-2"
      name={inputName}
      value={inputValue}
      onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
    />
  );
  const TitleEditProfile = (Title) => (
    <div className="font-bold h-8 flex items-center">{Title}</div>
  );

  return (
    <div className=" flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[25%]">
          <UserIcon size="100%" />
        </div>
        <div className="text-center p-2">
          <div className="font-bold text-[#6A6A6A] text-sm">Edit picture</div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-8">
          {TitleEditProfile("Username")}
          {TitleEditProfile("Bio")}
          {TitleEditProfile("Links")}
          {TitleEditProfile("Interest")}
          {TitleEditProfile("Birth date")}
          {TitleEditProfile("Education")}
          {TitleEditProfile("Company")}
        </div>
        <div className=" w-[75%]">
          <div className="flex flex-col gap-8">
            <InputEditProfile inputName="username" inputValue={authenticatedUser.username} />
            <InputEditProfile inputName="bio" inputValue={authenticatedUser.bio} />
            <InputEditProfile inputName="links" inputValue={authenticatedUser.links} />
            <InputEditProfile inputName="interest" inputValue={authenticatedUser.interest} />
            <InputEditProfile inputName="birth" inputValue={authenticatedUser.birthDate} />
            <InputEditProfile inputName="education" inputValue={authenticatedUser.education} />
            <InputEditProfile inputName="company" inputValue={authenticatedUser.company} />
          </div>
        </div>
      </div>
    </div>
  );
}
