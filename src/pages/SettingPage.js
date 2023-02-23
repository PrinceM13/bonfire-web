export default function SettingPage() {
  const LinkSetting = (TitleSetting) => (
    <div className="bg-white opacity-80 p-4 pb-0">
      <div className="flex justify-between border-b-2 border-black font-bold p-4 text-lg">
        <p>{TitleSetting}</p>
      </div>
    </div>
  );
  return (
    <>
      {LinkSetting("Account")}
      {LinkSetting("Log out")}
    </>
  );
}
