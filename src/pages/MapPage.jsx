import MapWidget from "../components/MapWidget";
import PreferitiWidget from "../components/PreferitiWidget";

const MapPage = () => {
    return (
        <div style={styles.container}>
            <MapWidget  width={"100vw"} height={"100vh"} borderRadius={"0px"} style={styles.map}/>
            <PreferitiWidget customCss={styles.preferiti} />
        </div>
    );
}

export default MapPage;

const styles = {
    container: {
        position: "relative"
    },
    map: {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0
    },
    preferiti: {
        position: "fixed",
        zIndex: 1,
        top: "2rem",
        right: "2rem",
        width: "20vw",
    }
}