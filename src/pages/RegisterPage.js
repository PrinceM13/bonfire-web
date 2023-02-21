import RegisterForm from "../features/auth/RegisterForm";
import Header from "../layouts/Header";
import ContentLayout from "../layouts/ContentLayout";

export default function LoginPage() {
  return (
    <>
      <Header content="" leftBtn="<" rightBtn=" " />
      <ContentLayout>
        <RegisterForm />
      </ContentLayout>
    </>
  );
}
