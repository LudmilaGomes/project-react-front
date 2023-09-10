import React from "react";
import styles from '../../css/Entrar-cadastrar/EntrarCadastrao.module.css'
import { Button, ConfigProvider, Input } from "antd";

function Entrar() {
	return (
		// bloco principal - tem como filhos todos os outros objetos
		<div className={styles.mainBlock}>
			{/* bloco para parágrafos introdutórios */}
			<div className={styles.introBlock}>
				<p className={styles.introBiblio}>Biblioteca Virtual</p>
				<p className={styles.introEntrar}>Entrar</p>
			</div>
			{/* customização - configuração dos objetos do AntDesign */}
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
				{/* blocos para caixas de input e seus textos */}
				<div className={styles.inputBlock}>
					<p className={styles.parag}>Nome de usuário</p>
					<Input placeholder="Insira sua nome" className={styles.CustomInput}/>
				</div>
				<div className={styles.inputBlock} >
					<p className={styles.parag}>Senha</p>
					<Input placeholder="Insira sua senha" className={styles.CustomInput}/>
				</div>
				{/* blocos para botões */}
				<div>
					<Button /* onClick={} href=""*/ className={styles.CustomButton}>
						ENTRAR
					</Button>
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

export default Entrar;