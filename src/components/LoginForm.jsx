import React from 'react';
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import "../css/LoginForm.css"

const LoginForm = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [secondPasswordInput, setSecondPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  
  const handleUsernameInput = (event) => {
    setUsernameInput(event.target.value);
  }
  const handlePasswordInput = (event) => {
    setPasswordInput(event.target.value);
  }
  const handleSecondPasswordInput = (event) => {
    setSecondPasswordInput(event.target.value);
  }
  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
  }

  useEffect(() => {
    if (passwordInput !== secondPasswordInput) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  }, [secondPasswordInput]);

  const handleSignUpClick = () => {
    if (!showSignUpForm) {
      setShowSignUpForm(true);
    }
    if (showSignUpForm) {
      // funzione di sign-up
      if (passwordsMatch) {
        setLoading(true);
        // funzione di login
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: usernameInput,
            password: passwordInput,
            mail: emailInput
          }),
          credentials: "include"
        };
        fetch("https://itsar-project-work-api.vercel.app/register", requestOptions)
        .then((response) => {
          if (response.status === 200) {
            login();
            setLoading(false);
          }
        });
      }
    }
  };
  const handleLogInClick = () => {
    if (showSignUpForm) {
      setShowSignUpForm(false);
    }
    if (!showSignUpForm) {
      setLoading(true)
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
          setLoading(false);
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
      <div className='container'>
        <div className='secondContainer'>
          <label htmlFor="username" className='label'>
            Username
          </label>
          <input type="text" id="username" className='inputLogin' onChange={handleUsernameInput} />
          <label htmlFor="password" className='label'>
            Password
          </label>
          <input type="password" id="password" className='inputLogin' onChange={handlePasswordInput} />
          {showSignUpForm && (
            <>
              <label htmlFor="secondPassword" className='label'>
                Repeat Password
              </label>
              {
                passwordsMatch ? null : <p style={styles.passwordsMatch}>The passwords don't match</p>
              }
              <input type="password" id="secondPassword" className='inputLogin' onChange={handleSecondPasswordInput} />
              <label htmlFor="email" className='label'>
                Email
              </label>
              <input type="email" id="email" className='inputLogin' onChange={handleEmailInput}/>
            </>
          )}
        </div>
      </div>
      <div className='thirdContainer'>
        {
          loading ?
          <div id="loading"></div>
          :
          <>
            <button className='btnLoginPage' id='loginBtn' onClick={handleLogInClick}>
              {showSignUpForm ? "Cancel" : "Log In"}
            </button>
            <button className='btnLoginPage' id='signUpBtn' onClick={handleSignUpClick}>
              Sign Up
            </button>
          </>
        }        
        
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
    marginBottom: "20px",
    paddingLeft: "1.5rem",
  },
  thirdContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "10px",
    padding: "50px 0"
  },
  buttons: {
    border: "0",
    backgroundColor: "white",
    height: "2.5rem",
    width: "6rem",
    borderRadius: "100px",
    fontWeight: "bold",
    fontSize: "1.01rem"
  },
  passwordsMatch: {
    fontSize: '0.8rem',
    color: 'red',
    margin: 0,
  }
};

export default LoginForm;
