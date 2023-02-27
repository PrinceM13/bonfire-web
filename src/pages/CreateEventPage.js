import CreateEventForm from "../components/createEvent/CreateEventForm";
import Post from "../features/post/Post";

export default function CreateEventPage() {
  return (
    <>
      <div>
        <h1>Create Event</h1>
      </div>
      <Post>
        <CreateEventForm />
      </Post>
    </>
  );
}
