export default function ContentLayout({ children, needPadding = true, haveFilter = false }) {
  return (
    <div
      className={`${needPadding ? "p-6" : ""} ${
        haveFilter ? "mt-[13vh]" : "mt-[16vh]"
      } mb-[8vh] relative z-0`}
    >
      {children}
    </div>
  );
}
