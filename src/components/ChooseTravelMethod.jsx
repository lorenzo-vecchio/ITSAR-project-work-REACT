const ChooseTravelMethod = () => {
    return (
        <div style={styles.container}>
            <h3>Scegli la modalità di viaggio:</h3>
            <div style={styles.buttonsContainer}>
                <button style={styles.buttons}>Auto</button>
                <button style={styles.buttons}>Bici</button>
                <button style={styles.buttons}>Camminata</button>
            </div>
        </div>
    )
}

const styles = {
    container: {
        position: 'fixed',
        left: '2rem',
        top: '5rem',
        width: '20vw',
        backgroundColor: "rgb(0, 0, 0, 0.75)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        color: 'white',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '5px',
        marginBottom: '2rem'
    },
    buttons: {
        height: '4rem',
        width: '5rem',
        border: '1px solid white',
        backgroundColor: 'transparent',
        color: 'white',
        borderRadius: '10px'
    }
}

export default ChooseTravelMethod;