import React, { useState, useContext, useEffect } from 'react';
import Title from "../components/Title";
import Image from "../placeholders/dog.jpg";
import FotoWidget from '../components/FotoWidget';
import "../css/Animal.css"
import { useParams } from 'react-router-dom';

const Animal= () => {
  const idAnimaleUrl = useParams()
  const [edit, setEdit] = useState(true)
  const [animals, setAnimals] = useState([]);
  const [risultato, setRisultato] = useState([])
  const [today, setToday] = useState("");

  //stati per l'eventuale aggiornamento dei dati
  const [nome, setNome] = useState("")
  const [razza, setRazza] = useState("")
  const [specie, setSpecie] = useState("")
  const [sesso, setSesso] = useState("")
  const [dataDiNascita, setDataDiNascita] = useState("")
  const [peso, setPeso] = useState("")
  //stati per le due checkbox
  const [checbox1, setCheckbox1] = useState(false)
  const [checbox2, setCheckbox2] = useState(false)

  const changeNome = (e) =>{
    setNome(e.target.value)
  }

  const changeSpecie = (e) =>{
    setSpecie(e.target.value)
  }

  const changeRazza = (e) =>{
    setRazza(e.target.value)
  }

  const changeSessoM = () =>{
    setCheckbox1(!checbox1)
    setCheckbox2(false)
    setSesso("M")
  }

  const changeSessoF = () =>{
    setCheckbox2(!checbox2)
    setCheckbox1(false)
    setSesso("F")
  }

  const changeDataDiNascita = (e) =>{
    setDataDiNascita(e.target.value)
  }

  const changePeso = (e) =>{
    setPeso(e.target.value)
  }

  const requestOptions = {
    credentials: 'include',
  }

  useEffect(() => {
    fetch("https://itsar-project-work-api.vercel.app/animals", requestOptions)
    .then(res => res.json())
    .then(
    (result) => {
        setAnimals(result);
    })
  }, [])

  useEffect(()=>{
    const currentDate = new Date().toISOString().split("T")[0];
    setToday(currentDate)
  },[])

  useEffect(()=>{
    const a = animals.filter((an) => an.id == idAnimaleUrl.id)
    setRisultato(a)
    risultato.map((a)=>{
      setNome(a.nome_animale)
      setSpecie(a.nome_specie)
      setRazza(a.nome_razza)
      setSesso(a.sesso)
      setDataDiNascita(a.data_di_nascita)
      setPeso(a.peso)
    })
  },[animals, edit])

  const editStato = () =>{
    setEdit(!edit)
    if(edit==false)
    {
      modificaAnimale()
    }
  }

  const modificaAnimale = () =>{
    const json = {
      id: idAnimaleUrl.id,
      nome: nome,
      razza: razza,
      sesso: sesso,
      data_di_nascita: dataDiNascita,
      peso: peso
    }
    const json2 = JSON.stringify(json)
    console.log(json2)
  }

  return (
    <div className='pagina'>
      <Title title="Il tuo animale"/>
      <div style={{ margin: "1rem"}}></div>
      <FotoWidget image={Image} />
      {
        risultato?.map((r)=>(
          <div className="contenuto" key={r.id}>
            <h2>DATI ANAGRAFICI</h2>
          
            <div className="grigliaContenuto">
              
                <div className='dati1'>
                  <span className='span'>Nome: </span>
                </div>
                <div className='dati'>
                  {edit?<p>{r.nome_animale}</p>: <input type="text" value={nome} className='input2' placeholder='inserisci nome' onChange={changeNome}/>}
                </div>
              
              
                <div className='dati1'>
                  <span className='span'>Specie: </span>
                </div>
                <div className='dati'>
                  {edit?<p>{r.nome_specie}</p>: <input type="text" value={specie} className='input2' placeholder='inserisci specie' onChange={changeSpecie}/>}
                </div>
              
              
                <div className='dati1'>
                  <span className='span'>Razza: </span>
                </div>
                <div className='dati'>
                  {edit?<p>{r.nome_razza}</p>: <input type="text" value={razza} className='input2' placeholder='inserisci razza' onChange={changeRazza}/>}
                </div>
              
              
                <div className='dati1'>
                  <span className='span'>Sesso: </span>
                </div>
                <div className='dati'>
                  {
                  edit?<p>{r.sesso==="M"? "Maschio": "Femmina"}</p>
                  : 
                  <div id='Divcheckbox'>
                    <label htmlFor="maschio">M</label>
                    <input  style={{ backgroundColor: checbox1 ? '#F7D9C4' : 'transparent' }} id="maschio" type="checkbox" className='inputCheck' checked={checbox1} onChange={changeSessoM}/>
                    <label htmlFor="femmina">F</label>
                    <input  style={{ backgroundColor: checbox2 ? '#F7D9C4' : 'transparent' }} id="femmina" type="checkbox" className='.inputCheck' checked={checbox2} onChange={changeSessoF}/>
                  </div>
                  }
                </div>
              
              
              
                <div className='dati1'>
                  <span className='span'>Data di Nascita: </span>
                </div>
                
                  <div className='dati'>
                    {edit?<p>{r.data_di_nascita}</p>: <input type="date" max={today}  value={dataDiNascita} className='inputDate' onChange={changeDataDiNascita}/>}
                  </div>
                
              
              
                <div className='dati1'>
                  <span className='span'>Peso: </span>
                </div>
                <div className='dati'>
                  {edit?<p>{r.peso!==null? r.peso: 0} kg</p>: <input type="number" value={peso} min="0" step="0.1" className='input2' placeholder='inserisci peso' onChange={changePeso}/>}
                </div>
              
            </div>
          </div>
        ))
      }
      <button className='buttonEdit' id='buttonEdit' onClick={editStato}>
        {edit? "Edit": "Save"}
        </button>
    </div>
  );
};


export default Animal;