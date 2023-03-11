export default function Message({ isMyMessage, username, profileImage, message, time }) {
  return isMyMessage ? (
    <MyMessage profileImage={profileImage} message={message} time={time} />
  ) : (
    <OtherMessage username={username} profileImage={profileImage} message={message} time={time} />
  );
}

function MyMessage({ profileImage, message, time }) {
  return (
    <div className="chat-message py-2">
      <div className="flex items-end justify-end">
        <div className="flex flex-col text-xs order-1 max-w-xs mx-2 space-y-2 items-end">
          <div className="flex">
            <div className="text-xs px-1">{time}</div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-white text-black shadow-md">
              {message}
            </span>
          </div>
        </div>
        <img src={profileImage} alt="My profile" className="w-6 h-6 rounded-full order-2" />
      </div>
    </div>
  );
}

function OtherMessage({ username, profileImage, message, time }) {
  return (
    <div className="chat-message py-2">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <div className="font-bold text-xs mb-1">{username}</div>
            <div className="flex">
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-white text-black shadow-md">
                {message}
              </span>
              <div className="text-xs px-1">{time}</div>
            </div>
          </div>
        </div>
        <img src={profileImage} alt="My profile" className="w-6 h-6 rounded-full order-1" />
      </div>
    </div>
  );
}
