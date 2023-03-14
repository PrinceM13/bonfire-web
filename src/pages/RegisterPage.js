import Background from "../components/background/Background";
import RegisterForm from "../features/auth/RegisterForm";

export default function LoginPage() {
  return (
    <>
      <Background bgColor="bg-[#FFFFFF]" />
      <div className="px-2">
        <RegisterForm />;
      </div>
    </>
  );
}
