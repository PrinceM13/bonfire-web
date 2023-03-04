export default function Post({ children }) {
  return (
    <div>
      <div className=" p-2 w-full bg-white rounded-lg shadow-lg content-center ">
        <div className="border-[1px] p-4 border-[#6A6A6A] rounded-lg">{children}</div>
      </div>
    </div>
  );
}
