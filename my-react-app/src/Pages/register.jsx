import AuthLayout from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
