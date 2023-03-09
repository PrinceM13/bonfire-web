import { useState } from "react";
import Background from "../components/background/Background";

import Button from "../components/Button";
import SelectCategories from "../components/categories/SelectCategories";
import CreateEventForm from "../components/createEvent/CreateEventForm";
import Input from "../components/Input";
import Modal from "../components/Modal";
import VerticalSpace from "../components/VerticalSpace";
import Map from "../features/map/Map";
import Post from "../features/post/Post";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const initialEventDetail = {
  image: "",
  title: "", // Event Name
  latitude: "", // Pin
  longitude: "", // Pin
  location: "", // Pin
  date: "", // Pick a date
  time: "", // Pick a date
  paticipant: "", // Max 5 People
  age: "", // ???
  category: "",
  tags: [], // Add tag
  detail: "" // Detail room
};

export default function CreateEventPage() {
  const [eventDetail, setEventDetail] = useState(initialEventDetail);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isDateTimeOpen, setIsDateTimeOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [isDetailOpen, setDetailOpen] = useState(false);

  const [tag, setTag] = useState("#");

  const handleChange = (updateObj) => {
    setEventDetail((state) => ({ ...state, ...updateObj }));
  };

  return (
    <>
      <Background />
      <Header title="Create Event" />
      <Post createEvent="mt-[13vh] mb-[8vh] p-6">
        <CreateEventForm
          eventDetail={eventDetail}
          onClear={() => setEventDetail(initialEventDetail)}
          handleChange={handleChange}
          isCategoryOpen={() => setIsCategoryOpen(true)}
          isMapOpen={() => setIsMapOpen(true)}
          isDateTimeOpen={() => setIsDateTimeOpen(true)}
          isTagOpen={() => setIsTagOpen(true)}
          isDetailOpen={() => setDetailOpen(true)}
        />
      </Post>

      {/* Categories */}

      <Modal title="CATEGORIES" isOpen={isCategoryOpen} onClose={() => setIsCategoryOpen(false)}>
        <SelectCategories
          onClose={() => setIsCategoryOpen(false)}
          setEventDetail={setEventDetail}
        />
      </Modal>

      {/* Pin */}

      <Modal title="PIN LOCATION" isOpen={isMapOpen} onClose={() => setIsMapOpen(false)}>
        <Map
          isMultiMarker={false}
          handleChange={handleChange}
          isEditAble={true}
          height="30vh"
          needSearch={true}
          isLink={false}
        />
        <VerticalSpace />
        <Input
          placeholder="latitude"
          value={eventDetail.latitude}
          onChange={(e) => handleChange({ latitude: e.target.value })}
        />
        <Input
          placeholder="longitude"
          value={eventDetail.longitude}
          onChange={(e) => handleChange({ longitude: e.target.value })}
        />
        <Input
          placeholder="location"
          value={eventDetail.location}
          onChange={(e) => handleChange({ location: e.target.value })}
        />
        <VerticalSpace />
        <Button onClick={() => setIsMapOpen(false)}>PIN</Button>
      </Modal>

      {/* Date && Time */}

      <Modal
        title="PICK Date-Time"
        isOpen={isDateTimeOpen}
        onClose={() => setIsDateTimeOpen(false)}
      >
        <Input
          type="date"
          placeholder="Date"
          value={eventDetail.date}
          onChange={(e) => handleChange({ date: e.target.value })}
        />
        <Input
          type="time"
          placeholder="Time"
          value={eventDetail.time}
          onChange={(e) => handleChange({ time: e.target.value })}
        />
        <VerticalSpace />
        <Button onClick={() => setIsDateTimeOpen(false)}>PICK</Button>
      </Modal>

      {/* Tag */}

      <Modal title="ADD TAG" isOpen={isTagOpen} onClose={() => setIsTagOpen(false)}>
        <Input
          placeholder="Tag"
          value={tag}
          onChange={(e) =>
            setTag(
              e.target.value === ""
                ? "#"
                : e.target.value[e.target.value.length - 2] === " " &&
                  e.target.value[e.target.value.length - 1] !== "#" &&
                  e.target.value[e.target.value.length - 1] !== "."
                ? e.target.value.slice(0, e.target.value.length - 1) +
                  "#" +
                  e.target.value[e.target.value.length - 1]
                : e.target.value[e.target.value.length - 1] === "."
                ? e.target.value.slice(0, e.target.value.length - 1)
                : e.target.value.replace(".", "")
            )
          }
        />
        <VerticalSpace />
        <Button
          onClick={() => {
            handleChange({
              tags: [...eventDetail.tags, ...tag.replace(/#/g, "").split(" ")].filter(
                (tag) => tag.trim() !== ""
              )
            });
            setTag("#");
            setIsTagOpen(false);
          }}
        >
          ADD
        </Button>
      </Modal>

      {/* Detail */}

      <Modal title="ADD Detail" isOpen={isDetailOpen} onClose={() => setDetailOpen(false)}>
        <Input
          placeholder="Detail"
          value={eventDetail.detail}
          onChange={(e) => handleChange({ detail: e.target.value })}
        />
        <VerticalSpace />
        <Button
          onClick={() => {
            setDetailOpen(false);
          }}
        >
          ADD
        </Button>
      </Modal>
      <Footer />
    </>
  );
}
