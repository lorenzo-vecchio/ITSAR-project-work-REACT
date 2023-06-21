import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import "./styles.css";
import Background from "./components/Background";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
<<<<<<< HEAD
import AddAnimalPage from "./pages/AddAnimalPage";
=======
>>>>>>> master
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
<<<<<<< HEAD
  */}
    <AddAnimalPage />
=======
        
      }
>>>>>>> master
    </div>
  );
}
