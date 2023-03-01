export default function EditEventPromotion() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center">
            <button className="flex justify-center items-center bg-[#D4D4D4] rounded-lg w-full h-[50vw] py-4 shadow-md">
              <div className="w-[25%]">
                <PictureIcon size="100%" />
              </div>
            </button>
          </div>
        </div>
        <div className="font-bold">
          <button>Mon, 20 Feb 2023, 19.00</button>
        </div>
        <div className="border-2 border-black p-2 rounded-lg">
          <form>
            <input className="w-full outline-none text-black" />
            {/* input ดึงข้อมูลมากจากที่ user create ไว้ตอนแรก*/}
          </form>
        </div>
      </div>
    </>
  );
}
