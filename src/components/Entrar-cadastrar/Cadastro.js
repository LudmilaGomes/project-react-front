import React from "react";
import styles from '../../css/Entrar-cadastrar/EntrarCadastrao.module.css'
import { Button, ConfigProvider, Input } from 'antd';

function Cadastro() {
  return (
		<div className={styles.mainBlock}>
			<div className={styles.introBlock}>
				<p className={styles.introBiblio}>Biblioteca Virtual</p>
				<p className={styles.introCadastro}>Cadastro</p>
			</div>
			<ConfigProvider
				theme={{
					token: {
						colorPrimaryActive: 'gray'
					},
					components: {
						Button: {
							colorBgContainer: '#E7D8BE',
							colorBorder: '#E7D8BE',
							colorPrimaryHover: '#E7D8BE'
						},
						Input: {
							controlOutline: '#e7d8be76',
							colorPrimaryHover: '#e7d8be76'
						}
					}
				}}
			>
				<div>
					<p className={styles.parag}>Nome</p>
					<Input placeholder="Insira seu nome" className={styles.CustomInput}/>

					<p className={styles.parag}>E-mail</p>
					<Input placeholder="Insira seu e-mail" className={styles.CustomInput}/>

					<p className={styles.parag}>CPF</p>
					<Input placeholder="Insira seu CPF" className={styles.CustomInput}/>
					
					<p className={styles.parag}>Senha</p>
					<Input placeholder="Insira sua senha" className={styles.CustomInput}/>
				</div>
				<div>
					<Button /* onClick={} href=""*/ className={styles.CustomButton}>
						CADASTRAR-SE
					</Button>
				</div>
			</ConfigProvider>
		</div>
	);
}

export default Cadastro;