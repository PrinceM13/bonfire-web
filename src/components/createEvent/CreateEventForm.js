import PictureIcon from "../../assets/icons/PictureIcon";
import TagIcon from "../../assets/icons/TagIcon";
import Input from "../Input";
import * as eventApi from "../../api/event-api";

export default function CreateEventForm({
  eventDetail,
  onClear,
  handleChange,
  isCategoryOpen,
  isMapOpen,
  isDateTimeOpen,
  isTagOpen,
  isDetailOpen
}) {
  const CreateInputForm = (placeholder, title, value) => (
    <div className="flex gap-3 w-full my-6">
      <div className="w-[5vw] flex flex-col justify-center">
        <TagIcon />
      </div>
      <Input
        placeholder={placeholder}
        onChange={(e) => handleChange({ [title]: e.target.value })}
        value={value}
      />
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await eventApi.createEvent(eventDetail);
    onClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="flex justify-center ">
          <button
            type="button"
            className="grid justify-center content-center bg-[#D4D4D4] rounded-lg w-[50vw] h-[30vh] py-4 shadow-md"
          >
            <PictureIcon />
          </button>
        </div>

        {CreateInputForm("Event Name", "title", eventDetail.title)}

        {/* Pin */}

        <div className="flex gap-3 w-full my-6">
          <div className="w-[5vw] flex flex-col justify-center">
            <TagIcon />
          </div>
          <div className="w-full" onClick={isMapOpen}>
            <Input
              placeholder="Pin your location"
              readOnly={true}
              value={
                eventDetail.latitude === "" && eventDetail.longitude === ""
                  ? ""
                  : `latitude: [${eventDetail.latitude}], longitude: [${eventDetail.longitude}]`
              }
              cursor="cursor-pointer"
            />
          </div>
        </div>

        {/* Date & Time */}

        <div className="flex gap-3 w-full my-6">
          <div className="w-[5vw] flex flex-col justify-center">
            <TagIcon />
          </div>
          <div className="w-full" onClick={isDateTimeOpen}>
            <Input
              placeholder="Pick Date & Time"
              readOnly={true}
              value={
                eventDetail.date === "" && eventDetail.time === ""
                  ? ""
                  : `date: [${eventDetail.date}], time: [${eventDetail.time}]`
              }
              cursor="cursor-pointer"
            />
          </div>
        </div>

        {CreateInputForm("Max 5 People", "paticipant", eventDetail.paticipant)}
        {CreateInputForm("Age", "age", eventDetail.age)}

        {/* Category */}

        <div className="flex gap-3 w-full my-6">
          <div className="w-[5vw] flex flex-col justify-center">
            <TagIcon />
          </div>
          <div className="w-full" onClick={isCategoryOpen}>
            <Input
              placeholder="Category"
              readOnly={true}
              value={eventDetail.category}
              cursor="cursor-pointer"
            />
          </div>
        </div>

        {/* Tag */}

        <div className="flex gap-3 w-full my-6">
          <div className="w-[5vw] flex flex-col justify-center">
            <TagIcon />
          </div>
          <div className="w-full" onClick={isTagOpen}>
            {eventDetail.tags.length === 0 ? (
              <Input placeholder="Tag" readOnly={true} cursor="cursor-pointer" />
            ) : (
              <p
                className="w-full shadow rounded-3xl my-2 border-2 p-1 px-2 break-words"
                placeholder="Category"
                readOnly={true}
                cursor="cursor-pointer"
              >
                {eventDetail.tags.reduce((acc, tag) => {
                  acc += `#${tag} `;
                  return acc;
                }, "")}
              </p>
            )}
          </div>
        </div>

        {/* Detail */}

        <div className="flex gap-3 w-full my-6">
          <div className="w-[5vw] flex flex-col justify-center">
            <TagIcon />
          </div>
          <div className="w-full" onClick={isDetailOpen}>
            {eventDetail.detail === "" ? (
              <Input placeholder="Detail" readOnly={true} cursor="cursor-pointer" />
            ) : (
              <p
                className="w-full shadow rounded-3xl my-2 border-2 p-1 px-2 break-words"
                placeholder="Category"
                readOnly={true}
                cursor="cursor-pointer"
              >
                {eventDetail.detail}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-4">
        <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white w-[80vw]">
          Create Event
        </button>
      </div>
    </form>
  );
}
