export default function ButtonConfirm({
  children,
  width = "",
  size = "text-base",
  theme = "",
  rounded = "rounded-lg",
  p = "py-2 px-4",
  border = "border",
  needSolid = false,
  opacity = false,
  type = "button"
}) {
  const success = "text-green-500 border-green-500 hover:bg-green-500";
  const success_solid = "bg-green-500 hover:bg-green-600";

  const danger = "text-red-400 border-red-400 hover:bg-red-400";
  const danger_solid = "bg-red-400 hover:bg-red-500";

  const normal = "text-[#D9D9D9] border-[#D9D9D9] hover:bg-[#D9D9D9]";
  const normal_solid = "bg-gray-400 hover:bg-gray-500";

  let colorTheme = "";
  let colorThemeSolid = "";

  if (theme === "success") {
    colorTheme = `${success} bg-transparent hover:text-[#434343] hover:border-transparent`;
    colorThemeSolid = `text-white border-transparent ${success_solid}`;
  } else if (theme === "danger") {
    colorTheme = `${danger} bg-transparent hover:text-[#434343] hover:border-transparent`;
    colorThemeSolid = `text-white border-transparent ${danger_solid}`;
  } else {
    colorTheme = `${normal} bg-transparent hover:text-[#434343] hover:border-transparent`;
    colorThemeSolid = `text-white border-transparent ${normal_solid}`;
  }

  return (
    <button
      type={type}
      className={` ${width} ${size} ${
        needSolid ? colorThemeSolid : colorTheme
      } ${rounded} ${p} ${border} font-semibold ${opacity && "opacity-20"} `}
    >
      {children}
    </button>
  );
}
