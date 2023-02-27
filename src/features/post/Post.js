export default function Post({ children }) {
  return (
    <div>
      <div className="grid p-2 w-full bg-white rounded-lg shadow-lg content-center ">
        <div className="border-[3px] p-4 border-black rounded-lg">{children}</div>
      </div>
    </div>
  );
}
