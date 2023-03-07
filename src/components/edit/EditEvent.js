import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as eventApi from "../../api/event-api";
import { updateEvents, updateEventFromId } from "../../redux/event-slice";
import ButtonConfirm from "../ButtonConfirm";
import Input from "../Input";

export default function EditEvent({ onClose, eventId, eventFromId }) {
  const eventData = eventFromId[eventId];
  const dispatch = useDispatch();
  const initialEditEventDetails = {
    image: eventData?.EventDetail?.image,
    title: eventData?.title, // Event Name
    // latitude: eventData?.EventDetail?.latitude, // Pin
    // longitude: eventData?.EventDetail?.longitude, // Pin
    // location: eventData?.EventDetail?.location, // Pin
    date: eventData?.EventDetail?.date, // Pick a date
    time: eventData?.EventDetail?.time,
    detail: eventData?.EventDetail?.detail
  };
  const [editEventDetail, setEditEventDetail] = useState(initialEditEventDetails);
  const [eventImage, setEventImage] = useState(null);
  const inputEl = useRef();
  const handleChangeEditEvent = (e) => {
    setEditEventDetail({ ...editEventDetail, [e.target.name]: e.target.value });
  };

  const handleEditEventForm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", eventImage);
      formData.append("title", editEventDetail.title);
      formData.append("date", editEventDetail.date);
      formData.append("time", editEventDetail.time);
      formData.append("detail", editEventDetail.detail);
      await eventApi.updateEvents(eventId, formData);
      dispatch(updateEvents({ idx: eventData?.idx, subEvent: editEventDetail }));
      dispatch(updateEventFromId());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleEditEventForm}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center">
            <button className="flex justify-center items-center bg-[#D4D4D4] rounded-lg w-full h-[50vw] py-4 shadow-md">
              <div className="">
                <img
                  src={eventImage ? URL.createObjectURL(eventImage) : eventData?.EventDetail?.image}
                  className="w-[100%] h-[100%]"
                />
                {/* <PictureIcon size="100%" /> */}
              </div>
            </button>
          </div>
          <input
            type="file"
            ref={inputEl}
            className="hidden"
            onChange={(e) => setEventImage(e.target.files[0])}
          />
          <button
            className="font-bold text-[#6A6A6A] text-sm"
            onClick={() => inputEl.current.click()}
          >
            Edit picture
          </button>
        </div>
        <div>
          <label className="font-bold">Event Name</label>
          <Input name="title" value={editEventDetail.title} onChange={handleChangeEditEvent} />
          <label className="font-bold">Date</label>
          <Input
            type="date"
            name="date"
            value={editEventDetail.date}
            onChange={handleChangeEditEvent}
          />
          <label className="font-bold">Time</label>
          <Input
            type="time"
            name="time"
            value={editEventDetail.time}
            onChange={handleChangeEditEvent}
          />
          <label className="font-bold">Location</label>
          <textarea
            name="location"
            // value={editEventDetail.location}
            // onChange={handleChangeEditEvent}
            className="w-full border-2 border-black p-2 rounded-lg"
            rows={3}
          />
          <label className="font-bold">Event Detail</label>
          <textarea
            name="detail"
            value={editEventDetail.detail}
            onChange={handleChangeEditEvent}
            className="w-full border-2 border-black p-2 rounded-lg"
            rows={3}
          />
        </div>

        <div className="flex gap-3">
          <div onClick={onClose}>
            <ButtonConfirm theme="success" type="submit">
              Done
            </ButtonConfirm>
          </div>
          <div
            onClick={() => {
              setEditEventDetail(initialEditEventDetails);
              onClose();
            }}
          >
            <ButtonConfirm theme="danger" type="reset">
              Cancel
            </ButtonConfirm>
          </div>
        </div>
      </div>
    </form>
  );
}
