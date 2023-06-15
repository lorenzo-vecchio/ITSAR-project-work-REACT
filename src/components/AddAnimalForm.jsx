import React, {useState} from 'react';
import '../css/AddAnimalForm.css';
import FotoWidget from "../components/FotoWidget";
import Image from "../placeholders/dog.jpg";

const AddAnimalForm = () => {
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


    return(
        
        <form method="get" className="style">
            <div></div>
            <FotoWidget image={Image} />

                <label className="label">Nome: </label>
                <input type="text" className="input" />

                <label className="label">Specie: </label>   
                <input type="text" list="specie" className="input" id="inputDataList1"/>
                <datalist id="specie">
                    <option value="Cane" />
                    <option value="Gatto" />
                </datalist>

                <label className="label">Razza: </label>
                <input type="text" list="razza" className="input" id="inputDataList2"/>
                <datalist id="razza">
                    <option value="Labrador" />
                    <option value="Persiano" />
                </datalist>
                <div>
                    {/*vuoto per griglia*/}
                </div>
                <div className="checkboxList">
                    <label>M</label>
                    <input type="checkbox" id="boxStyle1" checked={checkbox1Checked}
                    onChange={handleCheckbox1Change}/>
                    <label>F</label>
                    <input type="checkbox" id="boxStyle2" checked={checkbox2Checked}
                    onChange={handleCheckbox2Change}/>
                </div>


                <label className="label">Data di nascita: </label>
                <input type="date" className="inputDate" />

                <label className="label">Peso: </label>
                <input  type="number" className="input" placeholder="0 Kg" min="0"/>

            {/*
            <div>
                <label style={style.label}>Vaccinazioni: </label>
                <textarea type="text" style={style.vaccinazioni} placeholder="Inserire le vaccinazioni"/>
            </div>
    */}
        </form>


    );
}

export default AddAnimalForm;

