import React from "react";
import styles from '../../css/Entrar-cadastrar/Botao.module.css'

function Botao(props) 
{
    return (
        <button className={styles.buttonLogin} type="button">{props.buttonMessage}</button>
    );
}

export default Botao;