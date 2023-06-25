
import Title from "../components/Title";
import FotoWidget from "../components/FotoWidget";
import Image from "../placeholders/dog.jpg";
import BottoneWidget from "../components/BottoneWidget";
import MenuWidget from "../components/MenuWidget";
import "../css/UserPage.css";
import EditableWidget from "../components/EditableWidget";
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const UserPage = () => {
    const { logout } = useContext(AuthContext);

    function handleLogoutClick() {
        const requestOptions = {
            method: 'POST',
            credentials: "include"
        };
        fetch("https://itsar-project-work-api.vercel.app/logout", requestOptions).then(() => {
            logout();
        })
    }

    return (
    <div>
        <Title title="Il tuo account" />

        <div className="imgProfilo-container">
            <div className="imgProfilo">
                <FotoWidget image={Image} />
            </div>
        </div>
        <div className="testo">
            <div>
                <span className="informazoni">Nome: </span>

                <span> Giorgio </span>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>
                <span className="informazoni">Cognome: </span>

                <span>Rossi </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>

                <span className="informazoni">Email: </span>

                <span>Giorgio.rossi@gmail.com </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>

                <span className="informazoni">Password: </span>

                <span>********** </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
        </div>

                <div className="bottone">

                    <BottoneWidget testo={"Logout"} onClick={handleLogoutClick} />
                </div>
    </div>
    );
  };


  export default UserPage;