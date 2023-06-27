import React, {useState, useEffect} from 'react';
import { ButtonSubmit, ButtonReset } from './Button';
import Remove from "../media/remove.svg"
//import Input from "@mui/material/Input";
//import InputAdornment from "@mui/material/InputAdornment"; //to install it, write the command: npm install @mui/material @emotion/react; npm install @emotion/styled @mui/lab @mui/icons-material

const PromemoriaForm = () => {
    const buttonSend = document.getElementById('buttonAggiungi');
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const [animali, setAnimali] = useState([
        {id: "1", name:"Fido"},
        {id: "2", name:"Pippo"},
        {id: "3", name:"Siiumm"},
    ])

    const [formData, setFormData] = useState({
        Titolo: '',
        Descrizione: '',
        Data: '',
        Orario: '',
        arrayId: [""]
      });

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const [today, setToday] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [titolo, setTitolo] = useState("")
    const [descrizione, setDescrizione] = useState("")
    const [animale, setAnimale] = useState([""])

    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        setToday(currentDate);
        setCurrentTime(currentTime);
    }, []);


    const handleChange = (e) => {
        /*if(e.target.name === "titolo")
        {
            setTitolo(e.target.value)
        }
        else if(e.target.name === "descrizione")
        {
            setDescrizione(e.target.value)
        }
        else if(e.target.name === "animale")
        {
            setAnimale(e.target.value)
            const trovaId = animali.findIndex((a)=> a.name===animale)
            const nuovoArray = [...nuovoArray, trovaId]
        }
        setFormData({
            titolo,
            descrizione,
            today,
            currentTime,
            nuovoArray
        })*/

        setTitolo(e.target.value)
    };

    const handleChange2 = (e) =>{
        const valore = e.target.value
        setDescrizione(valore)
    }

    const handleChange3 = (e) =>{
        const trovaId = animali.findIndex((a)=> a.name===e.target.value)
        const nuovoArray = [...nuovoArray, trovaId]
        setAnimale(nuovoArray)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            titolo,
            descrizione,
            today,
            currentTime,
            animale
        })
        convertiJSON()
        };

    const convertiJSON = () =>{
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
    }
      
    return(
        
        <form className="style" onSubmit={handleSubmit}>
                <label className="label">Titolo: </label>
                <input type="text" className="input" name="titolo" onChange={handleChange} required/> 
                <label className="label">Descrizione: </label>   
                <input type="text" name="descrizione" className="input" onChange={handleChange2} />

                <label className="label">Data: </label>
                <input type="date" min={today} name="data" className="inputDate"/>

                <label className="label">Orario: </label>
                <input type="time" min={currentTime} name="orario" className="inputDate"/>

                <label className="label">Animale: </label>
                <input type="text" list="animali" name="animale" className="input" onChange={handleChange3}/>
                <datalist id="animali">
                    {
                        animali.map((animale)=>(
                            <option key={animale.id} value={animale.name}>{animale.name}</option>
                        ))
                    }
                </datalist>
                <div></div>
                <div style={styles.divAnimali}>
                    <p style={styles.divContenuto}>
                        Animale 1
                        <img style={styles.img} src={Remove} width={12} height={12}/>
                    </p>
                    <p style={styles.divContenuto}>
                        Animale 2
                        <img style={styles.img} src={Remove} width={12} height={12}/>
                    </p>
                    <p style={styles.divContenuto}>
                        Animale 3
                        <img style={styles.img} src={Remove} width={12} height={12}/>
                    </p>
                </div>
                <div></div>

                <div className="buttonsBottomForm">
                    <ButtonReset text="Anulla" />
                    <ButtonSubmit text="Aggiungi" />
                </div>

        </form>


    );
}

const styles  = {
    divAnimali:{
        backgroundColor: "white",
        borderWidth: "1",
        borderStyle: "solid",
        borderColor: "black",
        padding: 10,
        borderRadius: 20,
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: "77%",
    },
    divContenuto:{
        backgroundColor: "green",
        borderRadius: 10,
        maxWidth: "50%",
        padding: 5,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        margin: 5
    },
    img:{
        paddingLeft: 10
    }
}

export default PromemoriaForm;

