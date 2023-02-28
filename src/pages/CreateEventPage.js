import { useState } from "react";
import SelectCategories from "../components/categories/SelectCategories";
import CreateEventForm from "../components/createEvent/CreateEventForm";
import Modal from "../components/Modal";
import Post from "../features/post/Post";

const initialEventDetail = {
  image: "",
  title: "", // Event Name
  latitude: "", // Pin
  longitude: "", // Pin
  date: "", // Pick a date
  time: "", // Pick a date
  paticipant: 10, // Max 5 People
  category: "",
  age: 18, // ???
  tag: ["sunday", "morning", "garden"], // Add tag
  detail: "come and join us :)" // Detail room
};

export default function CreateEventPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [eventDetail, setEventDetail] = useState(initialEventDetail);

  return (
    <>
      <Post>
        <CreateEventForm
          eventDetail={eventDetail}
          setEventDetail={setEventDetail}
          onOpen={() => setIsOpen(true)}
        />
      </Post>
      <Modal title="Categories" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SelectCategories onClose={() => setIsOpen(false)} setEventDetail={setEventDetail} />
      </Modal>
    </>
  );
}
