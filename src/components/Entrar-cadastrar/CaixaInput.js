import React from "react";
import styles from '../../css/Entrar-cadastrar/CaixaInput.module.css'

function CaixaInput(props)
{
    return (
        <div className={styles.caixaInputLogin}>
            <p className={styles.parag}>{props.message}</p>
            <input className={styles.socoro} type="text" aria-label="First name" placeholder={props.messageInput}/>
        </div>
    );
}

export default CaixaInput;