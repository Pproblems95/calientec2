import styles from '../styles/esports.module.css';

export default function esports(){
    return(
       
        <div>
        <main className={styles.columna}>
        <div>
        <h1 className={styles.titulo}> CalienTec</h1>
        <button className={styles.boton}>Shooters</button>
        <br>
        </br>
        <button className={styles.marco1}></button>
        <br>
        </br>
        <button className={styles.marco1}></button>
        </div>
        <div>
        <h1 className = {styles.titulo2}>E-SPORTS</h1>
        <button className={styles.boton2}>Fighting games</button>
        <br>
        </br>
        <button className={styles.marco1}></button>
        <br>
        </br>
        <button className={styles.marco1}></button>
        </div>
        
       
        
        <div>
        <button className={styles.boton3}>Mobile</button>
        <br>
        </br>
        <button className={styles.marco1}></button>
        <br>
        </br>
        <button className={styles.marco1}></button>
        <button className={styles.perfil}></button>
        </div>
 
        </main>
       </div>
       
       
        
    
       
       
    );
}