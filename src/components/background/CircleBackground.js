export default function CircleBackground({ format = {} }) {
  const { top, left, color } = format;
  return (
    <div
      className={`${color} ${
        top ? "top-[-50vw] md:top-[-50vh]" : "bottom-[-50vw] md:bottom-[-50vh]"
      } ${
        left ? "left-[-50vw] md:left-[-50vh]" : "right-[-50vw] md:right-[-50vh]"
      } fixed -z-40 w-[100vw] h-[100vw] md:w-[100vh] md:h-[100vh] rounded-full bg-[#EB4E53] blur-[80px] sm:blur-[100px] md:blur-[120px]`}
    ></div>
  );
}
