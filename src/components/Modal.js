import VerticalSpace from "./VerticalSpace";

export default function Modal({
  children,
  title,
  isOpen,
  onClose,
  titleSize = "text-3xl",
  alwaysOpen = false
}) {
  return (
    <>
      {/* background */}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-[#232323aa] z-10`}
        onMouseDown={!alwaysOpen ? onClose : () => {}}
      >
        {/* card */}
        <div
          className="relative rounded-lg p-2 w-3/4 top-10 mx-auto bg-[#FFFFFF] mb-[15vh]"
          onMouseDown={(e) => (!alwaysOpen ? e.stopPropagation() : {})}
        >
          <div className="border-[3px] p-4 border-black rounded-lg">
            <div className="flex flex-col items-center  space-y-4 md:space-y-6 sm:p-8"></div>
            <div className={`${titleSize} font-bold text-center`}>{title}</div>
            <VerticalSpace />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
