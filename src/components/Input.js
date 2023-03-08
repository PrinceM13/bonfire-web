export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  readOnly,
  cursor
}) {
  return (
    <>
      <input
        className={`w-full shadow rounded-full border-2 p-1 px-4 ${cursor || ""}`} //${!error ? "" : "hidden"}
        type={type || "text"} // ถ้าตรง Input ใส่ type ก็จะรับค่าตาม props ที่ export ไป แต่ถ้าไม่ ก็จะมีชนิดเป็น text
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      {error && <div className="text-red-600">{error}</div>}
    </>
  );
}
