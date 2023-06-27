import ImmagineRemove from '../media/remove.svg'

const PlaceWidget = (props) => {
    return (
        <div style={styles.container}>
            <h1>{props.posto.nome}</h1>
            <img src={ImmagineRemove} style={styles.iconaClose} width={15} height={15} onClick={props.onClose} />
        </div>
    )
}

const styles = {
    container: {
        position: 'fixed',
        left: '2rem',
        top: '5rem',
        height: '60vh',
        width: '20vw',
        color: "white",
        backgroundColor: "rgb(0, 0, 0, 0.75)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        borderRadius: '15px'
    },
    iconaClose: {
        position: 'fixed',
        top: '15px',
        right: '15px',
    }
}

export default PlaceWidget;