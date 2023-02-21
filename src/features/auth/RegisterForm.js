import Input from "../../components/Input";

export default function RegisterForm() {
  return (
    <form>
      <div className="flex flex-col">
        <div>
          <Input placeholder="Firstname" />
        </div>
        <div>
          <Input placeholder="Lastname" />
        </div>
        <div>
          <Input placeholder="Email" />
        </div>
        <div>
          <Input placeholder="Mobile" />
        </div>
        <div>
          <Input placeholder="Birth date" />
        </div>
        <div>
          <Input placeholder="Password" />
        </div>
        <div>
          <Input placeholder="Confirm password" />
        </div>
        <div className="flex justify-center">
          <div className="flex gap-4">
            <input type="checkbox" className="default:ring-2" />
            <span>please read the condition before create account</span>
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <button className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 rounded-full w-[90vw] text-white font-bold shadow-md">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
