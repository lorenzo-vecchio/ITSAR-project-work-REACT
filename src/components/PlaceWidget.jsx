import ImmagineRemove from '../media/remove.svg'

const PlaceWidget = (props) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.titolo}>{props.posto.nome}</h1>
            <p style={styles.locReg}>{props.posto.localita}, {props.posto.regione} - {props.posto.tipo}</p>
            <img src={ImmagineRemove} style={styles.iconaClose} width={15} height={15} onClick={props.onClose} />
        </div>
    )
}

const styles = {
    container: {
        position: 'fixed',
        left: '2rem',
        top: '5rem',
        width: '20vw',
        paddingBottom: '2rem',
        color: "white",
        backgroundColor: "rgb(0, 0, 0, 0.75)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    iconaClose: {
        position: 'fixed',
        top: '15px',
        right: '15px',
    },
    titolo: {
        width: '90%',
        marginTop: '3rem'
    },
    locReg: {
        width: '90%',
        color: '#a3a3a3',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'left',
        margin: 0
    }
}

export default PlaceWidget;