
import Title from "../components/Title";
import FotoWidget from "../components/FotoWidget";
import Image from "../placeholders/dog.jpg";
import BottoneWidget from "../components/BottoneWidget";
import MenuWidget from "../components/MenuWidget";
import "../css/UserPage.css";
import EditableWidget from "../components/EditableWidget";

const UserPage = () => {
    return (
    <div>
        <Title title="Il tuo account" />
<<<<<<<<< Temporary merge branch 1
        <div className="imgProfilo-container">
            <div className="imgProfilo">
                <FotoWidget image={Image} />
            </div>
        </div>
        <div className="testo">
            <div>
                <span className="informazoni">Nome: </span>
=========
        <div style={{ margin: "4rem" }}></div>
        <FotoWidget image={Image}/>
        <div style={styles.testo}>
            <div>
                <span style={styles.informazoni}>Nome: </span>
>>>>>>>>> Temporary merge branch 2
                <span>Giorgio </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>
<<<<<<<<< Temporary merge branch 1
                <span className="informazoni">Cognome: </span>
=========
                <span style={styles.informazoni}>Cognome: </span>
>>>>>>>>> Temporary merge branch 2
                <span>Rossi </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>
<<<<<<<<< Temporary merge branch 1
                <span className="informazoni">Email: </span>
=========
                <span style={styles.informazoni}>Email: </span>
>>>>>>>>> Temporary merge branch 2
                <span>Giorgio.rossi@gmail.com </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
            <div>
<<<<<<<<< Temporary merge branch 1
                <span className="informazoni">Password: </span>
=========
                <span style={styles.informazoni}>Password: </span>
>>>>>>>>> Temporary merge branch 2
                <span>********** </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </div>
        </div>
<<<<<<<<< Temporary merge branch 1
                <div className="bottone">
=========
                <div style={styles.bottone}>
>>>>>>>>> Temporary merge branch 2
                    <BottoneWidget testo={"Logout"}/>
                </div>
        <div>
            <MenuWidget />
        </div>
    </div>
    );
  };
<<<<<<<<< Temporary merge branch 1
=========
  
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
>>>>>>>>> Temporary merge branch 2

  export default UserPage;