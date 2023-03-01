import PictureIcon from "../../assets/icons/PictureIcon";
import TagIcon from "../../assets/icons/TagIcon";

export default function CreateEventForm() {
  const TagIconProfile = () => (
    <div className="w-[5vw] flex flex-col justify-center h-8">
      <TagIcon size="100%" />
    </div>
  );

  const InputProfileForm = (TitleInput) => (
    <input
      className="border-b-2 border-[#6A6A6A] bg-transparent  focus:outline-none font-bold pl-2 h-8"
      placeholder={TitleInput}
    />
  );
  return (
    <>
      <div className=" p-4 rounded-lg bg-white">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center">
            <button className="flex justify-center items-center bg-[#D4D4D4] rounded-lg w-[50vw] h-[30vh] py-4 shadow-md">
              <div className="w-[25%]">
                <PictureIcon size="100%" />
              </div>
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-8 shrink-0">
              {TagIconProfile()}
              {TagIconProfile()}
              {TagIconProfile()}
              {TagIconProfile()}
              {TagIconProfile()}
              {TagIconProfile()}
              {TagIconProfile()}
            </div>
            <div className="flex flex-col gap-8 w-[90%]">
              {InputProfileForm("Event Name")}
              {InputProfileForm("Location")}
              {InputProfileForm("Pick a date")}
              {InputProfileForm("Max 5 People")}
              {InputProfileForm("Category")}
              {InputProfileForm("Add tag")}
              {InputProfileForm("Detail room")}
            </div>
          </div>
          <div className="flex justify-center w-full py-4">
            <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white w-[80%]">
              Create Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
