export default function VerticalSpace({ line = false }) {
  return <hr className={`${line ? "h-px bg-black" : ""} my-4 border-0`}></hr>;
}
