import React, {useState, useEffect} from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import '../css/AddAnimalForm.css';
import FotoWidget from "../components/FotoWidget";
import Image from "../placeholders/dog.jpg";
import { ButtonSubmit, ButtonReset } from './Button';
//import Input from "@mui/material/Input";
//import InputAdornment from "@mui/material/InputAdornment"; //to install it, write the command: npm install @mui/material @emotion/react; npm install @emotion/styled @mui/lab @mui/icons-material

const AddAnimalForm = () => {
    const buttonSend = document.getElementById('buttonAggiungi');
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        Nome: '',
        Razza: '',
        Specie: '',
        Genere: '',
        DataDiNascita: '',
        Peso: '',
      });
    
    const [today, setToday] = useState() 

    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        setToday(currentDate);
    }, []);
    
    const navigate = useNavigate();
    
    const handleCheckbox1Change = (e) => {
        setCheckbox1Checked(!checkbox1Checked);
        setCheckbox2Checked(false);
        setFormData({ ...formData, Genere: "M" });
        //handleChange();
    };

    const handleCheckbox2Change = (e) => {
        setCheckbox2Checked(!checkbox2Checked);
        setCheckbox1Checked(false);
        setFormData({ ...formData, Genere: "F" });
        //handleChange();
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const request_body = {
            nome_animale: formData.Nome,
            sesso: formData.Genere,
            data_di_nascita: formData.DataDiNascita,
            razza: formData.Razza,
            peso: formData.Peso
        }
        const jsonData = JSON.stringify(request_body);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonData,
            credentials: "include"
        };
        fetch("https://itsar-project-work-api.vercel.app/animals", requestOptions)
            .then((response) => {
            if (response.status === 200) {
                // animale aggiunto:
                navigate("/");
                setLoading(false)
            }
        });
    };
      
    return(
        
        <form className="style" onSubmit={handleSubmit}>
            <div></div>
            <FotoWidget image={Image} />

                <label className="label">Nome: </label>
                <input type="text" className="input" name="Nome" onChange={handleChange}/> 
                <label className="label">Specie: </label>   
                <input type="text" list="specie" name="Specie" className="input" id="inputDataList1" onChange={handleChange}/>
                <datalist id="specie">
                    <option value="Cane" />
                    <option value="Gatto" />
                </datalist>

                <label className="label">Razza: </label>
                <input type="text" list="razza" name="Razza" className="input" id="inputDataList2" onChange={handleChange}/>
                <datalist id="razza">
                    <option value="Labrador" />
                    <option value="Persiano" />
                </datalist>
                <div>
                    {/*vuoto per griglia*/}
                </div>

                <div className="checkboxList">
                    <label>M</label>
                    <input type="checkbox" id="boxStyle1" name="Genere" value="M" onChange={handleCheckbox1Change} checked={checkbox1Checked}/>
                    <label>F</label>
                    <input type="checkbox" id="boxStyle2" name="Genere" value="F" onChange={handleCheckbox2Change} checked={checkbox2Checked}/>
                </div>

                <label className="label">Data di nascita: </label>
                <input type="date" name="DataDiNascita" max={today} onChange={handleChange} className="inputDate"/>

                <label className="label">Peso: </label>
                <input
                    type="number" 
                    id="kginput" 
                    className="input"
                    placeholder="0 Kg" 
                    min="0"
                    name="Peso"
                    onChange={handleChange}
                />

                {/*
                <div>
                    <label style={style.label}>Vaccinazioni: </label>
                    <textarea type="text" style={style.vaccinazioni} placeholder="Inserire le vaccinazioni"/>
                </div>
                */}         

                <div>
                    {/*vuoto per griglia*/}
                </div>

                <div className="buttonsBottomForm">
                    {
                        loading ?
                        <div id="loading"></div>
                        :
                        <>
                            <NavLink to={"/"}><ButtonReset text="Anulla" /></NavLink>
                            <ButtonSubmit text="Aggiungi" />
                        </>
                    }
                    
                </div>

        </form>


    );
}

export default AddAnimalForm;

