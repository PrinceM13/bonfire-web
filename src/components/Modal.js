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
        } fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-[#232323aa]`}
        onMouseDown={!alwaysOpen ? onClose : () => {}}
      >
        {/* card */}
        <div
          className="relative rounded-lg p-4 w-3/4 top-10 mx-auto bg-[#94C1E8]"
          onMouseDown={(e) => (!alwaysOpen ? e.stopPropagation() : {})}
        >
          <div className="flex flex-col items-center p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className={`${titleSize} font-bold text-center`}>{title}</div>
            <VerticalSpace />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
