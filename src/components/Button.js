export default function Button({ children, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 rounded-full w-full text-white font-bold shadow-md"
    >
      {children}
    </button>
  );
}
