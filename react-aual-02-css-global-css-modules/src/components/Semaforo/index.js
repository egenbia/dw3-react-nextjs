//Importando CSS do componente 
import styles from "@/components/Semaforo/semaforo.module.css"

const Semaforo = () => {
 return (
    <>
    <div
    //CSS INLINE 
    style={
        {
            heigh: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#f0f0f0"
        }
    }   
    >
            <h3 style={{marginTop: "30px"}}>Semáforo em React</h3>

            <br />
            <div className={styles.luz}></div>
            <div className={styles.luz}></div>
            <div className={styles.luz}></div>

            <br />

            <div>
                <button className="button">Pare!</button>
                <button className="button">Atenção</button>    
                 <button className="button">Prossiga!</button>
            </div>

        </div>
    </>
 )
}

export default Semaforo;