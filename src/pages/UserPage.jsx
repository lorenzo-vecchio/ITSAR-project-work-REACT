
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

const UserPage = () => {
    const { logout } = useContext(AuthContext);

    const [editable, setEditable] = useState(false);
    
    const handleButtonClick = () => {
        if (editable) {
            const ciao = save()
            console.log(ciao)
        }
        setEditable(!editable)
    }

    const fields = [
        {name: "Nome", value: "Giorgio", label: "Nome"},
        {name: "Cognome", value: "Rossi", label: "Cognome"},
        {name: "Email", value: "GRossi@gmail.com", label: "Email"},
        {name: "Password", value: "********", label: "Password"}
    ]


    const FieldJSON = JSON.stringify(fields)

    function handleLogoutClick() {
        const requestOptions = {
            method: 'POST',
            credentials: "include"
        };
        fetch("https://itsar-project-work-api.vercel.app/logout", requestOptions).then(() => {
            logout();
        })
    }

    const save = () => {
       const data = {
        nome: fields[0].value,
        cognome: fields[1].value,
       }
       return data;
    }

    return (

        console.log(FieldJSON),

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


  export default UserPage;