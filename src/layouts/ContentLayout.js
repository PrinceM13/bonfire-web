export default function ContentLayout({
  children,
  needPadding = true,
  haveFilter = false,
  needSwitch = false
}) {
  return (
    <div
      className={`${needPadding ? "p-6" : ""} ${
        needSwitch ? "mt-[22vh]" : haveFilter ? "mt-[16vh]" : "mt-[13vh]"
      } mb-[8vh] relative z-0`}
    >
      {children}
    </div>
  );
}
