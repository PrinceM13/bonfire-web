import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

import { setUser } from "../../redux/auth-slice";
import * as userApi from "../../api/user-api.js";
import Avatar from "../Avatar";

export default function EditProfileForm() {
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  // console.log(authenticatedUser);
  const dispatch = useDispatch();
  const inputEl = useRef();
  const initialInput = {
    username: authenticatedUser?.username,
    links: authenticatedUser?.links,
    education: authenticatedUser?.education,
    company: authenticatedUser?.company,
    bio: authenticatedUser?.bio
  };
  const [input, setInput] = useState(initialInput);
  const [file, setFile] = useState(null);

  // console.log(file);
  const InputEditProfile = (inputName, inputValue) => (
    <input
      className="w-full border-b-2 bg-transparent focus:outline-none border-[#6A6A6A] h-8 pl-2"
      name={inputName}
      value={inputValue}
      onChange={(e) => setInput({ ...input, [inputName]: e.target.value })}
    />
  );
  const handleEditForm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profileImage", file);
      formData.append("username", input.username);
      formData.append("links", input.links);
      formData.append("education", input.education);
      formData.append("company", input.company);
      formData.append("bio", input.bio);
      const responseUpdate = await userApi.editMyProfile(formData);
      // console.log(responseUpdate);
      dispatch(setUser(responseUpdate));
    } catch (err) {
      console.log(err);
    }
  };
  const TitleEditProfile = (Title) => (
    <div className="font-bold h-8 flex items-center">{Title}</div>
  );

  return (
    <form onSubmit={handleEditForm}>
      <div className=" flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center">
          <Avatar
            src={file ? URL.createObjectURL(file) : authenticatedUser.profileImage}
            size="150"
          />
          <div className="text-center p-2">
            <input
              type="file"
              ref={inputEl}
              className="hidden"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <button
              className="font-bold text-[#6A6A6A] text-sm"
              onClick={() => inputEl.current.click()}
            >
              Edit picture
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-8">
            {TitleEditProfile("Username")}
            {TitleEditProfile("Links")}
            {TitleEditProfile("Education")}
            {TitleEditProfile("Company")}
            {/* {TitleEditProfile("Bio")} */}
          </div>
          <div className=" w-[75%]">
            <div className="flex flex-col gap-8">
              {InputEditProfile("username", input.username)}
              {InputEditProfile("links", input.links)}
              {InputEditProfile("education", input.education)}
              {InputEditProfile("company", input.company)}
              {/* {InputEditProfile("bio", input.bio)} */}
            </div>
          </div>
        </div>
        <textarea
          className="border-black border-2 "
          placeholder="Bio...."
          name="bio"
          value={input.bio}
          onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
        />
        <div className="flex justify-center w-full py-4">
          <button
            type="submit"
            className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 rounded-full font-bold text-white w-[50%]"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
