import profileImage from "../assets/icons/Avatar.png";

export default function Avatar({ src = "", size }) {
  return (
    <img src={src || profileImage} alt="user" width={size} height={size} className="rounded-full" />
  );
}
// {`rounded-circle cursor-pointer ${classes}`}
