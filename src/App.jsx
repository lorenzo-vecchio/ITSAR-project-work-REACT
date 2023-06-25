import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Background from "./components/Background";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import AddAnimalPage from "./pages/AddAnimalPage";
import UserPage from "./pages/UserPage";
import NoPage from './pages/NoPage';
import MenuWidget from './components/MenuWidget';

export default function App() {
  const { loggedIn, login } = useContext(AuthContext);
  const requestOptions = {
    credentials: 'include'
  }
  fetch("https://itsar-project-work-api.vercel.app/login", requestOptions).then((response) => {
    if (response.status === 200) {
      login();
    }
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Background />
        {
          loggedIn ? <MenuWidget /> : null
        }
        <Routes>
          <Route path="/" element={loggedIn ? <HomePage /> : <LoginPage />} />
          <Route path="mappa" element={loggedIn ? <MapPage /> : <LoginPage />} />
          <Route path="account" element={loggedIn ? <UserPage /> : <LoginPage />} />
          <Route path="aggiungi" element={loggedIn ? <AddAnimalPage /> : <LoginPage />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
