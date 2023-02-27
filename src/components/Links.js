import PlusIcon from "../assets/icons/PlusIcon";

export default function Links() {
  return (
    <div className="flex gap-4 bg-white  border-b-2 border-[#6A6A6A]">
      <div className="my-4 ml-4 w-[10%]">
        <PlusIcon size="100%" />
      </div>
      <div className="grid items-center">
        <span className="text[20px] font-bold">Add external link</span>
      </div>
    </div>
  );
}
