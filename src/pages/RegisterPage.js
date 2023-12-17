import { Fragment, useEffect, useState } from "react";
import RegisterForm from "../components/Register/RegisterForm";
import SignInOrUp from "../components/Sign In-Up/SignInOrUp";
import LoginForm from "../components/login Form/LoginForm";
import Sidebar from "../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import Logout from "../components/logout comp/Logout";

function RegisterPage(props) {
  const [showChoice, setShowChoice] = useState("none");
  const userName = useSelector((state) => state.userName);
  useEffect(() => {
    console.log(userName);
  }, [userName]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "900px" }}
    >
      <Sidebar setCurrentPage={props.setCurrentPage} />
      {userName === "" ? (
        <Fragment>
          <SignInOrUp setShowChoice={setShowChoice} />
          <RegisterForm showChoice={showChoice} />
          <LoginForm showChoice={showChoice} />
        </Fragment>
      ) : (
        <Logout name={userName} />
      )}
    </div>
  );
}

export default RegisterPage;
