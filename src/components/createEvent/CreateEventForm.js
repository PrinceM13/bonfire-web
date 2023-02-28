import PictureIcon from "../../assets/icons/PictureIcon";
import TagIcon from "../../assets/icons/TagIcon";
import Input from "../Input";

export default function CreateEventForm({ eventDetail, setEventDetail, onOpen }) {
  const CreateInputForm = (title) => (
    <div className="flex gap-3 w-full my-6">
      <div className="w-[5vw] flex flex-col justify-center">
        <TagIcon />
      </div>
      <Input placeholder={title} />
      {/* <input
        className="border-b-2 border-[#6A6A6A] grow bg-transparent w-[70vw] px-2 py-1 focus:outline-none font-bold"
        placeholder={title}
      /> */}
    </div>
  );

  const handleChange = (key, value) => {
    setEventDetail((state) => ({ ...state, [key]: value }));
  };

  return (
    <>
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

        {/* Category */}

        <div className="flex gap-3 w-full my-6">
          <div className="w-[5vw] flex flex-col justify-center">
            <TagIcon />
          </div>
          <div className="w-full" onClick={onOpen}>
            <Input
              placeholder="Category"
              readOnly={true}
              value={eventDetail.category}
              onChange={(e) => handleChange("category", e.target.value)}
              cursor="cursor-pointer"
            />
          </div>
        </div>

        {CreateInputForm("Add tag")}
        {CreateInputForm("Detail room")}
      </div>
      <div className="flex justify-center w-full py-4">
        <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white w-[80vw]">
          Create Event
        </button>
      </div>
    </>
  );
}
