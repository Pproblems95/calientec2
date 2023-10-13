
import styles from "../styles/easport.module.css"
import image from "next/image"
export default function transaccion(){
    return(
        <body className={styles.fondo}>       
            <head>
                <title>Apuesta EA sports</title>
            </head>
            <main className={styles.columna}> 
                <div>
                    <h1 className={styles.CalienTec}>CalienTec</h1>
                    <div className={styles.clasico}>CLÁSICA</div>
                    <div className={styles.c1}>Selecciona al ganador</div>
                    <button className={styles.btnapuesta}>EQUIPO 1</button>
                    <button className={styles.btnapuesta}>EQUIPO 2</button>               
                </div>                       
                <div>
                    <h1 className={styles.valoran}>Valorant</h1>
                    <div className={styles.avanzado}>AVANZADA</div>
                    <div className={styles.c2}>Adivina el resultado y el ganador</div>
                    <button className={styles.btn2}>EQUIPO 1</button>
                    <div className={styles.mover}> 
                        <label htmlFor="Puntaje">Puntaje</label>
                        <input type="text" id="puntaje" placeholder="1"></input>
                    </div>
                    <button className={styles.btn2}>EQUIPO 2</button> 
                    <div className={styles.mover}>
                        <label htmlFor="Puntaje">Puntaje</label>
                        <input type="text" id="puntaje" placeholder="1"></input>
                    </div>
                </div>
                <div>
                    <button className={styles.perfil}>Perfil</button>
                    <div className={styles.cant}>CANTIDAD</div>
                    <div className={styles.c3}>Escriba cantidad</div>
                    <div className={styles.mover2}>
                        <label htmlFor="Puntaje">Puntaje</label>
                        <input type="text" id="puntaje" placeholder="1"></input>
                    </div>
                    <button className={styles.btntr}>Apostar</button>
                </div>
            </main>
        </body>
    );
}