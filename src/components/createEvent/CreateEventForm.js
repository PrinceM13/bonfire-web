import PictureIcon from "../../assets/icons/PictureIcon";
import TagIcon from "../../assets/icons/TagIcon";
import Input from "../Input";
import * as eventApi from "../../api/event-api";
import validateCreateEvent from "../../validators/create-event-validator";
import { useRef, useState } from "react";
import useLoading from "../../hook/useLoading";
import { useNavigate } from "react-router";

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
  const [error, setError] = useState({});
  const [image, setImage] = useState(null);
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();
  const inputEl = useRef();
  const CreateInputForm = (placeholder, title, value, error) => {
    return (
      <div className="flex gap-3 w-full my-6">
        <div className="w-[5vw] flex flex-col justify-center">
          <TagIcon />
        </div>
        <div className="flex flex-col w-full">
          <Input
            placeholder={placeholder}
            onChange={(e) => handleChange({ [title]: e.target.value })}
            value={value}
            error={error}
          />
        </div>
      </div>
    );
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateCreateEvent(eventDetail);
      if (result) {
        setError(result);
      } else {
        setError({});
        startLoading();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", eventDetail.title);
        formData.append("latitude", eventDetail.latitude);
        formData.append("longitude", eventDetail.longitude);
        formData.append("location", eventDetail.location);
        formData.append("date", eventDetail.date);
        formData.append("time", eventDetail.time);
        formData.append("paticipant", eventDetail.paticipant);
        formData.append("age", eventDetail.age);
        formData.append("category", eventDetail.category);
        formData.append("tags", eventDetail.tags.join("#"));
        formData.append("detail", eventDetail.detail);
        await eventApi.createEvent(formData);
        onClear();
      }
    } catch (err) {
      console.log("error", err?.response?.data?.message);
    } finally {
      stopLoading();
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="h-[100%] w-[100%] flex justify-center rounded-xl">
          <div className=" bg-[#D4D4D4] rounded-lg shadow-md h-[300px] w-[300px]">
            <img
              src={image ? URL.createObjectURL(image) : null}
              className="h-[300px] w-[300px] rounded-xl"
              alt="Event Image"
            />
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            type="button"
            className="font-bold text-[#6A6A6A] text-sm"
            onClick={() => inputEl.current.click()}
          >
            Add Image
          </button>
          <input
            type="file"
            name="image"
            ref={inputEl}
            className="hidden"
            error={error.image}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        {CreateInputForm("Event Name", "title", eventDetail.title, error.title)}

        {/* Pin */}

        <div className="flex gap-3 w-full my-6">
          <div className="w-[5vw] flex flex-col justify-center">
            <TagIcon />
          </div>
          <div className="w-full" onClick={isMapOpen}>
            <Input
              name="location"
              error={error.location || error.latitude || error.longitude}
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
              name="dateTime"
              error={error.date || error.time}
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

        {CreateInputForm("Max Joiners", "paticipant", eventDetail.paticipant, error.paticipant)}
        {CreateInputForm("Min Joiner's Age", "age", eventDetail.age, error.age)}

        {/* Category */}

        <div className="flex gap-3 w-full my-6">
          <div className="w-[5vw] flex flex-col justify-center">
            <TagIcon />
          </div>
          <div className="w-full" onClick={isCategoryOpen}>
            <Input
              name="category"
              error={error.category}
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
              <Input
                placeholder="Tag"
                readOnly={true}
                cursor="cursor-pointer"
                name="tags"
                value={eventDetail.tags}
              />
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
              <Input
                placeholder="Detail"
                readOnly={true}
                cursor="cursor-pointer"
                name="detail"
                error={error.detail}
              />
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
