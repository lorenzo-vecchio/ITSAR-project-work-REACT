import Title from "../components/Title";
import FotoWidget from "../components/FotoWidget";
import Image from "../placeholders/dog.jpg";
import BottoneWidget from "../components/BottoneWidget";
import MenuWidget from "../components/MenuWidget";
import "../css/UserPage.css";
import { TextField } from "../components/TextFieldWidget";
import { ButtonSubmit, ButtonReset } from '../components/Button';
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from '../contexts/AuthContext';
import "../css/ButtonWidget.css";

const UserPage = () => {
    const { logout } = useContext(AuthContext);
    const[editable, setEditable] = useState(false);

    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const requestOptions = {
            credentials: 'include',
        }
        fetch("https://itsar-project-work-api.vercel.app/user", requestOptions)
        .then(res => res.json())
        .then(
        (result) => {
            setNome(result.nome)
            setCognome(result.cognome)
            setEmail(result.email)
            setUsername(result.username)
            setEmail(result.email)
        })
    }, [])
    
    const handleButtonClick = () => {
        if (editable) {
            const data = {
                nome: nome,
                cognome: cognome,
                username: username,
                email: email,
                password: password
            }
            const jsonData = JSON.stringify(data);       
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonData,
                credentials: "include"
                };
            fetch("https://itsar-project-work-api.vercel.app/user", requestOptions)
                .then((response) => {
                if (response.status === 200) {
                    console.log(jsonData)
                }
            });
        }
        setEditable(!editable)
    }

    function handleLogoutClick() {
        const requestOptions = {
            method: 'POST',
            credentials: "include"
        };
        fetch("https://itsar-project-work-api.vercel.app/logout", requestOptions).then(() => {
            logout();
        })

    }

    const handleChangeNome = (e) => {
        setNome(e.target.value)
    }
    const handleChangeCognome = (e) => {
        setCognome(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    return (
        <div className="body">
            <Title title="Il tuo account" />
            <div className="imgProfilo-container">
                <div className="imgProfilo">
                    <FotoWidget image={Image} />
                </div>
            </div>
            
            <div class="centerRow">
                <div class="testo">
                    <h3 className="h3Titolo" >Nome: </h3>
                    {
                        editable ?
                        <input className="input" type="text" value={nome} onChange={handleChangeNome}></input>
                        :
                        <p className="pInformazione" >{nome}</p>
                    }
                    <h3 className="h3Titolo" >Cognome: </h3>
                    {
                        editable ?
                        <input className="input" type="text" value={cognome} onChange={handleChangeCognome}></input>
                        :
                        <p className="pInformazione">{cognome}</p>
                    }
                    <h3 className="h3Titolo" >Email: </h3>
                    {
                        editable ?
                        <input className="input" type="text" value={email} onChange={handleChangeEmail}></input>
                        :
                        <p className="pInformazione">{email}</p>
                    }
                    <h3 className="h3Titolo" >Username: </h3>
                    {
                        editable ?
                        <input className="input" type="text" value={username} onChange={handleChangeUsername}></input>
                        :
                        <p className="pInformazione">{username}</p>
                    }
                    <h3 className="h3Titolo" >Password: </h3>
                    {
                        editable ?
                        <input className="input" type="password" value={password} onChange={handleChangePassword}></input>
                        :
                        <p className="pInformazione">*********</p>
                    }
                </div>
            </div>

                <div className="bottone">
                    <button className="btnLogoutUser" id="logoutUser" onClick={handleLogoutClick}>
                        Logout
                    </button> 
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