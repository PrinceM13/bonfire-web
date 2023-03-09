import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

import { setUser } from "../../redux/auth-slice";
import * as userApi from "../../api/user-api.js";
import Avatar from "../Avatar";
import useLoading from "../../hook/useLoading";

export default function EditProfileForm() {
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  // console.log(authenticatedUser);
  const dispatch = useDispatch();
  const inputEl = useRef();
  const navigate = useNavigate();
  const initialInput = {
    username: authenticatedUser?.username,
    links: authenticatedUser?.links,
    bio: authenticatedUser?.bio
  };
  const [input, setInput] = useState(initialInput);
  const [file, setFile] = useState(null);
  const { startLoading, stopLoading } = useLoading();

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
    startLoading();
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profileImage", file);
      formData.append("username", input.username);
      formData.append("links", input.links);
      formData.append("bio", input.bio);
      const responseUpdate = await userApi.editMyProfile(formData);
      navigate(`/profile/${authenticatedUser?.id}`);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };
  const TitleEditProfile = (Title) => (
    <div className="font-bold h-8 flex items-center">{Title}</div>
  );

  return (
    <form onSubmit={handleEditForm}>
      <div className=" flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <Avatar
            src={file ? URL.createObjectURL(file) : authenticatedUser.profileImage}
            size="100%"
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
              type="button"
              className="font-bold text-[#6A6A6A] text-sm"
              onClick={() => inputEl.current.click()}
            >
              Edit picture
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-8 text-sm">
            {TitleEditProfile("Username")}
            {TitleEditProfile("Links")}
          </div>
          <div className=" w-[75%]">
            <div className="flex flex-col gap-8">
              {InputEditProfile("username", input.username)}
              {InputEditProfile("links", input.links)}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#6A6A6A] to-[#D4D4D4] p-[1.5px] w-full rounded-lg flex justify-between">
          <div className="flex w-full h-full items-center justify-center bg-white rounded-lg">
            <textarea
              className="p-2 outline-none w-full rounded-lg"
              placeholder="You can add a short bio to tell people more about yourself."
              name="bio"
              value={input.bio}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              rows={3}
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-4">
          <button
            type="submit"
            className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 rounded-full font-bold text-white w-[50%]"
            // onClick={() => navigate(`/profile/${authenticatedUser?.id}`)}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
