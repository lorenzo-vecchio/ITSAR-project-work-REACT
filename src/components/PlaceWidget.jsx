import ImmagineRemove from '../media/remove.svg'

const PlaceWidget = (props) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.titolo}>{props.posto.nome}</h1>
            <p style={styles.locReg}>{props.posto.localita}, {props.posto.regione} - {props.posto.tipo}</p>
            <img src={ImmagineRemove} style={styles.iconaClose} width={15} height={15} onClick={props.onClose} />
            <svg
            onClick={props.posto.favorite ? props.onRemoveFromFav : props.onAddToFav}
            style={styles.stella}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill={props.posto.favorite ? 'white' : 'none'}
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star"
            >
            <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
            </svg>
        </div>
    )
}

const styles = {
    container: {
        position: 'fixed',
        left: '2rem',
        top: '8rem',
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
    stella: {
        position: 'fixed',
        top: '10px',
        right: '45px',
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
    },
}

export default PlaceWidget;