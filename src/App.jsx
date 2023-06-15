import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import "./styles.css";
import Background from "./components/Background";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import AddAnimalPage from "./pages/AddAnimalPage";
import UserPage from "./pages/UserPage";

export default function App() {
  const { loggedIn, login } = useContext(AuthContext);
  const requestOptions = {
    credentials: 'include'
  }
  fetch("http://127.0.0.1:5000/login", requestOptions).then((response) => {
    if (response.status === 200) {
      login();
    }
  })
  return (
    <div className="App">
      <Background />
      {/*
        loggedIn ? <HomePage /> : <LoginPage />
  */}
    <AddAnimalPage />
    </div>
  );
}
