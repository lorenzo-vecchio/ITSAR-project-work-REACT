import React, { useState, useContext, useEffect } from 'react';
import Title from "../components/Title";
import Image from "../placeholders/dog.jpg";
import FotoWidget from '../components/FotoWidget';
import { ContextId } from '../contexts/ContextProvider';
import "../css/Animal.css"

const Animal= () => {
  const {id, modificaId} = useContext(ContextId)
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
    const a = animals.filter((an) => an.id === id)
    setRisultato(a)
    risultato.map((a)=>{
      setNome(a.nome_animale)
      setSpecie(a.nome_specie)
      setRazza(a.nome_razza)
      setSesso(a.sesso)
      setDataDiNascita(a.data_di_nascita)
      setPeso(a.peso)
    })
  },[animals])

  const editStato = () =>{
    setEdit(!edit)
    if(edit==false)
    {
      modificaAnimale()
    }
  }

  const modificaAnimale = () =>{
    const json = {
      nome: nome,
      specie: specie,
      razza: razza,
      sesso: sesso,
      data_di_nascita: dataDiNascita,
      peso: peso
    }

    console.log(json)
  }

  return (
    <div className='pagina'>
      <Title title="Il tuo animale"/>
      <div style={{ margin: "1rem"}}></div>
      <FotoWidget image={Image} />
      {
        risultato?.map((r)=>(
          <div className="contenuto" key={r.id}>
            <h3>DATI ANAGRAFICI</h3>
            <div className='informazioni'>
              <div className='dati'>
                <span>Nome</span>
              </div>
              <div className='dati'>
                {edit?<strong>{r.nome_animale}</strong>: <input type="text" value={nome} className='input2' placeholder='inserisci nome' onChange={changeNome}/>}
              </div>
            </div>
            <div className='informazioni'>
              <div className='dati'>
                <span>Specie</span>
              </div>
              <div className='dati'>
                {edit?<strong>{r.nome_specie}</strong>: <input type="text" value={specie} className='input2' placeholder='inserisci specie' onChange={changeSpecie}/>}
              </div>
            </div>
            <div className='informazioni'>
              <div className='dati'>
                <span>Razza</span>
              </div>
              <div className='dati'>
                {edit?<strong>{r.nome_razza}</strong>: <input type="text" value={razza} className='input2' placeholder='inserisci razza' onChange={changeRazza}/>}
              </div>
            </div>
            <div className='informazioni'>
              <div className='dati'>
                <span>Sesso</span>
              </div>
              <div className='dati'>
                {
                edit?<strong>{r.sesso==="M"? "Maschio": "Femmina"}</strong>
                : 
                <div id='Divcheckbox'>
                  <label for="maschio">M</label>
                  <input  style={{ backgroundColor: checbox1 ? 'cyan' : 'transparent' }} id="maschio" type="checkbox" className='input2' checked={checbox1} onChange={changeSessoM}/>
                  <label for="femmina">F</label>
                  <input  style={{ backgroundColor: checbox2 ? 'pink' : 'transparent' }} id="femmina" type="checkbox" className='input2' checked={checbox2} onChange={changeSessoF}/>
                </div>
                }
              </div>
            </div>
            <div className='informazioni'>
              <div className='dati'>
                <span>Data di Nascita</span>
              </div>
              <div className='dati'>
                {edit?<strong>{r.data_di_nascita}</strong>: <input type="date" max={today}  value={dataDiNascita} className='input2' id='data' onChange={changeDataDiNascita}/>}
              </div>
            </div>
            <div className='informazioni'>
              <div className='dati'>
                <span>Peso</span>
              </div>
              <div className='dati'>
                {edit?<strong>{r.peso!==null? r.peso: 0} kg</strong>: <input type="number" value={peso} min="0" step="0.1" className='input2' placeholder='inserisci peso' onChange={changePeso}/>}
              </div>
            </div>
          </div>
        ))
      }
      <button className='buttonEdit' onClick={editStato}>
        {edit? "Edit": "Save"}
        </button>
    </div>
  );
};


export default Animal;