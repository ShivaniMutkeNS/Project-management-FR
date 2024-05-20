import "./Auth.css";
import { Button } from "@/components/ui/button";
import SignupForm from "./signup/SignupForm";
import LoginForm from  "./login/login" // Adjusted import path to match your actual path
import PasswordResetTokenForm from "./PasswordResetToken/PasswordResetTokenForm"; // Import PasswordResetTokenForm
import React, { useState } from "react";
import UpdatePasswordForm from "@/pages/Auth/PasswordResetToken/UpdatePasswordForm.jsx";

const Auth = () => {
  const [activeForm, setActiveForm] = useState("login");

  const renderForm = () => {
    switch (activeForm) {
      case "login":
        return <LoginForm switchToPasswordResetForm={() => setActiveForm("reset")} />;
      case "reset":
        return <PasswordResetTokenForm switchToLoginForm={() => setActiveForm("login")} />;
      case "signup":
      default:
        return <SignupForm />;
    }
  };

  return (
      <div className="loginContainer">
        <div className="box h-[30rem] w-[25rem]">
          <div className="minContainer login">
            <div className="loginBox w-full px-10 space-y-5 font-xl font-bold text-black-900">
              {renderForm()}
              <div className="flex items-center justify-center font-xl font-bold text-black">
                {activeForm === "signup" && (
                    <>
                      <span>Already Have Account? </span>
                      <Button onClick={() => setActiveForm("login")} variant="ghost">
                        Signin
                      </Button>
                    </>
                )}
                {activeForm === "login" && (
                    <>
                      <span>New User?? </span>
                      <Button onClick={() => setActiveForm("signup")} variant="ghost">
                        Signup
                      </Button>
                    </>
                )}
                {activeForm === "reset" && (
                    <Button onClick={() => setActiveForm("login")} variant="ghost">
                      Back to Login
                    </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Auth;
