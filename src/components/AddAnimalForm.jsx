import React, {useState} from 'react';
import '../css/AddAnimalForm.css';
import FotoWidget from "../components/FotoWidget";
import Image from "../placeholders/dog.jpg";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment"; //to install it, write the command: npm install @mui/material @emotion/react; npm install @emotion/styled @mui/lab @mui/icons-material

const AddAnimalForm = () => {
    const buttonSend = document.getElementById('buttonAggiungi');
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    }
    
    const handleCheckbox1Change = () => {
        setCheckbox1Checked(!checkbox1Checked);
        if (checkbox2Checked) {
        setCheckbox2Checked(false);
        }
    };
    
    const handleCheckbox2Change = () => {
        setCheckbox2Checked(!checkbox2Checked);
        if (checkbox1Checked) {
        setCheckbox1Checked(false);
        }
    };

    const [formData, setFormData] = useState({
        Nome: '',
        Razza: '',
        Specie: '',
        Genere: '',
        DataDiNascita: '',
        Peso: '',
      });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
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
                    <input type="checkbox" id="boxStyle1" checked={checkbox1Checked}/>
                    <label>F</label>
                    <input type="checkbox" id="boxStyle2" checked={checkbox2Checked}/>
                </div>

                <label className="label">Data di nascita: </label>
                <input type="date" name="DataDiNascita" onChange={handleChange} className="inputDate"/>

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
                    <button type="reset" className="buttonForm" id="buttonAnnulla">Annulla</button>
                    <button type="submit" className="buttonForm" id="buttonAggiungi" onClick={handleSubmit}>Aggiungi</button>
                </div>

        </form>


    );
}

export default AddAnimalForm;

