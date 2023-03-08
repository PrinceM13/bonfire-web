export default function Post({ children, createEvent = "" }) {
  return (
    <div className={createEvent}>
      <div className=" p-2 w-full rounded-lg content-center bg-[#ffffffbb] drop-shadow-lg">
        <div className="p-0 rounded-lg">{children}</div>
      </div>
    </div>
  );
}
