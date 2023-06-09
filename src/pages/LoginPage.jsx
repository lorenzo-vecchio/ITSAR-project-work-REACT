import React from 'react';
import Title from "../components/Title";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Title title="login" />
      <div style={{ margin: "4rem" }}></div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
