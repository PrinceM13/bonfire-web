export default function Post({ children, createEvent = "" }) {
  return (
    <div className={createEvent}>
      <div className=" p-2 w-full bg-white rounded-lg shadow-lg content-center ">
        <div className="p-4 rounded-lg">{children}</div>
      </div>
    </div>
  );
}
