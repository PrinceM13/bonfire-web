import UserIcon from "../../assets/icons/UserIcon";

export default function EditProfileForm() {
  const InputEditProfile = () => (
    <input className="w-full border-b-2 bg-transparent focus:outline-none border-[#6A6A6A] h-8 pl-2" />
  );
  const TitleEditProfile = (Tiltle) => (
    <div className="font-bold h-8 flex items-center">{Tiltle}</div>
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
            {InputEditProfile()}
            {InputEditProfile()}
            {InputEditProfile()}
            {InputEditProfile()}
            {InputEditProfile()}
            {InputEditProfile()}
            {InputEditProfile()}
          </div>
        </div>
      </div>
    </div>
  );
}
