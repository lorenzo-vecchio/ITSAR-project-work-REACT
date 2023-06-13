import React, {useState} from 'react';

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
        <form method="get" style={style}>
            <div>
                <label style={style.label}>Nome: </label>
                <input type="text" style={style.input} />
            </div>
            <div>
                <label style={style.label}>Specie: </label>   
                <input type="text" list="specie" style={style.input}/>
                <datalist id="specie">
                    <option value="Cane" />
                    <option value="Gatto" />
                </datalist>
            </div>
            <div>
                <label style={style.label}>Razza: </label>
                <input type="text" list="razza" style={style.input}/>
                <datalist id="razza">
                    <option value="Labrador" />
                    <option value="Persiano" />
                </datalist>
            </div>            
            <div>
                <label>M</label>
                <input type="checkbox" class="checkbox" style={style.boxStyle1} checked={checkbox1Checked}
                onChange={handleCheckbox1Change}/>

                <label>F</label>
                <input type="checkbox" class="checkbox" style={style.boxStyle2} checked={checkbox2Checked}
                onChange={handleCheckbox2Change}/>
            </div>
            <div>
                <label style={style.labelData}>Data di nascita: </label>
                <input type="date" style={style.inputData} />
            </div>
            <div>
                <label style={style.label}>Peso: </label>
                <input type="number" style={style.input} placeholder="0 Kg"/>
            </div>
            <div>
                <label style={style.label}>Vaccinazioni: </label>
                <textarea type="text" style={style.vaccinazioni} placeholder="Inserire le vaccinazioni"/>
            </div>
        </form>

    );
}

export default AddAnimalForm;

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: "white",

    input: {
        height: "3rem",
        borderRadius: "1.5rem",
        border: "0",
        marginBottom: "20px",
        fontSize: "20px",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem"
      },

    inputData: {
        height: "3rem",
        borderRadius: "1.5rem",
        fontSize: "20px",
        minWidth: "15.5rem",
        marginBottom: "20px",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        border: "0",
    },
    
    label: {
        marginRight:  "1rem"
    },

    labelData:{
        textAlign: "right",
        marginRight:"1rem"
    },

    vaccinazioni: {
        borderRadius: "1.5rem",
        border: "0",
        marginBottom: "20px",
        fontSize: "20px",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        height: "30rem",
        resize:"vertical",
        overflow:"auto",

    },

    boxStyle1: {
        marginRight: "2rem",
        marginLeft: "0.75rem",
        transform: 'scale(1.5)',
        backgroundColor: 'red', 
        marginBottom: "20px",
    },

    boxStyle2: {
        marginLeft: "0.75rem",
        transform: 'scale(1.5)',
        backgroundColor: 'red', 
        marginBottom: "20px",
    }
}
