
import Title from "../components/Title";
import FotoWidget from "../components/FotoWidget";
import Image from "../placeholders/dog.jpg";
import BottoneWidget from "../components/BottoneWidget";
import MenuWidget from "../components/MenuWidget";
import "../css/UserPage.css";
import { TextField } from "../components/TextFieldWidget";
import { ButtonSubmit, ButtonReset } from '../components/Button';
import React, { useState, useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';
import "../css/ButtonWidget.css";

/*
const UserPage = () => {

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
        <div style={{ margin: "4rem" }}></div>
        <FotoWidget image={Image}/>
        <div style={styles.testo}>
            <div>
                <span style={styles.informazoni}>Nome: </span>
                <span>Giorgio </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>
                <span className="informazoni">Cognome: </span>


                <span style={styles.informazoni}>Cognome: </span>
                <span>Rossi </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>


                <span className="informazoni">Email: </span>


                <span style={styles.informazoni}>Email: </span>
                <span>Giorgio.rossi@gmail.com </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>
                <span className="informazoni">Password: </span>

                <span style={styles.informazoni}>Password: </span>

                <span>********** </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
        </div>
    </div>
    );
};
*/

const UserPage = () => {
    const { logout } = useContext(AuthContext);

    const [editable, setEditable] = useState(false);
    
    const handleButtonClick = () => {
        setEditable(!editable)
    }

    const fields = [
        {name: "Nome", value: "Giorgio", label: "Nome"},
        {name: "Cognome", value: "Rossi", label: "Cognome"},
        {name: "Email", value: "Giorgio.rossi@gmail.com", label: "Email"},
        {name: "Password", value: "********", label: "Password"}
    ]

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
        <div className="body">
            <Title title="Il tuo account" />
            <div className="imgProfilo-container">
                <div className="imgProfilo">
                    <FotoWidget image={Image} />
                </div>
            </div>
            
            <TextField fields={fields} onButtonClick={handleButtonClick} editable={editable}/>
                
                <div className="bottone">
                    <BottoneWidget class="fixed-button" testo={"Logout"} onClick={handleLogoutClick}/>
                </div>

            <div className="footerContainer">
                <button onClick={handleButtonClick} className="buttonForm" id="buttonAnnulla">
                    {editable ? "Save" : "Edit"}
                </button>
            </div>
        </div>
    );
  };


  
const styles = {
    bottone:{
        marginTop:"7rem"
    },
    testo:{
        marginTop:"1rem",
        display:"flex",
        flexDirection: "column",
        gap: "1rem",
        fontSize:"24px"
    },
    informazoni:{
        fontWeight:"bold",
    },
    imgProfilo:{
        opacity: "1",
        transition: "opacity 0.3s ease-in-out"
    },
    imgProfiloHover: {
        opacity: "0.5",
    }
}


export default UserPage;