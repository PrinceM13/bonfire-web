import profileImage from "../assets/icons/Avatar.png";

export default function Avatar({ src = "", size }) {
  return <img src={profileImage} alt="user" width={size} height={size} />;
}
// {`rounded-circle cursor-pointer ${classes}`}
