import React from 'react';
import book from './morro.jpg';
import styles from '../../css/Navegar/CompBookExibe.module.css'
import { Button } from 'antd';

function CompBookExibe(props)
{
  return (
    <div>
      <div className={styles.productCard}>
        <img 
          src={book} 
          width={170} 
          height={200} 
          className={styles.productImage}
          alt="help"
        />
        <p className={styles.productName}>{props.name}</p>
        <p className={styles.productName}>Autor: {props.author}</p>
        <Button>Read</Button>
      </div>
    </div>
  );
}

export default CompBookExibe;