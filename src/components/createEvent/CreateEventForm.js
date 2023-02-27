import PictureIcon from "../../assets/icons/PictureIcon";
import TagIcon from "../../assets/icons/TagIcon";

export default function CreateEventForm() {
  const CreateInputForm = (Title) => (
    <div className="flex gap-3 w-full my-6">
      <div className="w-[5vw] flex flex-col justify-center">
        <TagIcon />
      </div>
      <input
        className="border-b-2 border-[#6A6A6A] grow bg-transparent w-[70vw] px-2 py-1 focus:outline-none font-bold"
        placeholder={Title}
      />
    </div>
  );
  return (
    <>
      {/* <div className="border-[3px] p-4 border-black rounded-lg"> */}
      <div>
        <div className="flex justify-center ">
          <button className="grid justify-center content-center bg-[#D4D4D4] rounded-lg w-[50vw] h-[30vh] py-4 shadow-md">
            <PictureIcon />
          </button>
        </div>

        {CreateInputForm("Event Name")}
        {CreateInputForm("Pin")}
        {CreateInputForm("Pick a date")}
        {CreateInputForm("Max 5 People")}
        {CreateInputForm("Category")}
        {CreateInputForm("Add tag")}
        {CreateInputForm("Detail room")}
      </div>
      <div className="flex justify-center w-full py-4">
        <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white w-[80vw]">
          Create Event
        </button>
      </div>
      {/* </div> */}
    </>
  );
}
