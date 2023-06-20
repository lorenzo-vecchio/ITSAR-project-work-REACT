import React from 'react';
import { useState } from "react";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const LoginForm = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const { login } = useContext(AuthContext);

  
  const handleUsernameInput = (event) => {
    setUsernameInput(event.target.value);
  }
  const handlePasswordInput = (event) => {
    setPasswordInput(event.target.value);
  }

  const handleSignUpClick = () => {
    if (!showSignUpForm) {
      setShowSignUpForm(true);
    }
    if (showSignUpForm) {
      // funzione di sign-up
    }
  };
  const handleLogInClick = () => {
    if (showSignUpForm) {
      setShowSignUpForm(false);
    }
    if (!showSignUpForm) {
      // funzione di login
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput
        }),
        credentials: "include"
      };
      fetch("https://itsar-project-work-api.vercel.app/login", requestOptions)
      .then((response) => {
        if (response.status === 200) {
          login();
        }
      });
    }
  };
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <form
      style={{ ...styles.form, ...{ marginTop: "5rem" } }}
      onSubmit={submitForm}
    >
      <div style={styles.container}>
        <div style={styles.secondContainer}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input type="text" id="username" style={styles.input} onChange={handleUsernameInput} />
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input type="password" id="password" style={styles.input} onChange={handlePasswordInput} />
          {showSignUpForm && (
            <>
              <label htmlFor="secondPassword" style={styles.label}>
                Repeat Password
              </label>
              <input type="password" id="secondPassword" style={styles.input} />
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input type="email" id="email" style={styles.input} />
            </>
          )}
        </div>
      </div>
      <div style={styles.thirdContainer}>
        <button style={styles.buttons} onClick={handleLogInClick}>
          {showSignUpForm ? "Cancel" : "Log In"}
        </button>
        <button style={styles.buttons} onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    color: "white"
  },
  container: {
    backgroundColor: "rgb(0, 0, 0, 0.75)",
    padding: "3rem",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "500px"
  },
  secondContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "5px",
    width: "100%"
  },
  label: {
    display: "block"
  },
  input: {
    height: "3rem",
    borderRadius: "100px",
    border: "0",
    width: "100%",
    marginBottom: "20px"
  },
  thirdContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "10px",
    padding: "50px"
  },
  buttons: {
    border: "0",
    backgroundColor: "white",
    height: "2.5rem",
    width: "6rem",
    borderRadius: "100px",
    fontWeight: "bold",
    fontSize: "1.01rem"
  }
};

export default LoginForm;
