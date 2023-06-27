
import Title from "../components/Title";
import FotoWidget from "../components/FotoWidget";
import Image from "../placeholders/dog.jpg";
import BottoneWidget from "../components/BottoneWidget";
import MenuWidget from "../components/MenuWidget";
import "../css/UserPage.css";
import { TextField } from "../components/TextFieldWidget";
import { ButtonSubmit, ButtonReset } from '../components/Button';
import React, { useState } from "react";
import "../css/ButtonWidget.css";

/*
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
                </div>
                <div>
                    <span className="informazoni">Cognome: </span>
                    <span>Rossi </span>
                </div>
                <div>

                    <span className="informazoni">Email: </span>

                    <span>Giorgio.rossi@gmail.com </span>

                </div>
                <div>

                    <span className="informazoni">Password: </span>

                    <span>********** </span>

                </div>
            </div>

                    <div className="bottone">
                        <BottoneWidget testo={"Logout"}/>
                    </div>
            <div className="footer">
                <MenuWidget />
                <ButtonReset text="Modifica" />
            </div>
        </div>
    );
};
*/

const UserPage = () => {

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

    return (
        <div>
            <Title title="Il tuo account" />
            <div className="imgProfilo-container">
                <div className="imgProfilo">
                    <FotoWidget image={Image} />
                </div>
            </div>
            
            <TextField fields={fields} onButtonClick={handleButtonClick} editable={editable}/>

                <div className="bottone">
                    <BottoneWidget testo={"Logout"}/>
                </div>

            <div className="footerContainer">
                <div className="footer">
                    <button onClick={handleButtonClick} className="buttonForm" id="buttonAnnulla">
                        {editable ? "Save" : "Edit"}
                    </button>
                </div>
            </div>
        </div>
    );
};


  export default UserPage;