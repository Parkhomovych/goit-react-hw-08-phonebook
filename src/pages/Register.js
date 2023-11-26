import RegisterForm from "components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet";

export default function Register(){

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm/>
    </>
  )
}
