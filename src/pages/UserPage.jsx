
import Title from "../components/Title";
import FotoWidget from "../components/FotoWidget";
import Image from "../placeholders/dog.jpg";
import BottoneWidget from "../components/BottoneWidget";
import MenuWidget from "../components/MenuWidget";
import { useState } from "react";

const UserPage = () => {
    const [hover, setHover] = useState(false);
    function mouseOver() {
        console.log("mouseOver");
        setHover(true);
    }
    function mouseOut() {
        console.log("mouseOut");
        setHover(false);
    }
    return (
    <div>
        <Title title="Il tuo account" />
        <div style={{ margin: "4rem" }}></div>
        <div>
            <FotoWidget image={Image} onMouseOver={mouseOver} onMouseOut={mouseOut} style={hover ? styles.imgProfiloHover : styles.imgProfilo}/>
        </div>
        <div style={styles.testo}>
            <div>
                <span style={styles.informazoni}>Nome: </span>
                <span>Giorgio </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>
                <span style={styles.informazoni}>Cognome: </span>
                <span>Rossi </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>
                <span style={styles.informazoni}>Email: </span>
                <span>Giorgio.rossi@gmail.com </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>
                <span style={styles.informazoni}>Password: </span>
                <span>********** </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
        </div>
                <div style={styles.bottone}>
                    <BottoneWidget testo={"Logout"}/>
                </div>
        <div>
            <MenuWidget />
        </div>
    </div>
    );
  };
  
  const styles = {
    bottone:{
        marginTop:"7rem"
    },
    testo:{
        marginTop:"1rem",
        display:"flex",
        flexDirection: "column",
        gap: "1rem",
        fontSize:"24px"
    },
    informazoni:{
        fontWeight:"bold",
    },
    imgProfilo:{
        opacity: "1",
        transition: "opacity 0.3s ease-in-out"
    },
    imgProfiloHover: {
        opacity: "0.5",
    }
  }

  export default UserPage;