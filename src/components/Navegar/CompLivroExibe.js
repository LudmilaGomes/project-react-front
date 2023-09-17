import React from 'react';
import book from './morro.jpg';
import styles from '../../css/Navegar/CompLivroExibe.module.css'
import { Button } from 'antd';

function CompLivroExibe(props)
{
  return (
    <div>
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
          <p className={styles.productName}>{props.author}</p>
          <Button className={styles.CustomButton}>Ler Livro</Button>
        </div>
      </div>
    </div>
  );
}

export default CompLivroExibe;