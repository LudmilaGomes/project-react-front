import React, { useState } from 'react';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, ConfigProvider, Input } from 'antd';
import CustomCollapse from './CustomCollapse';
import styles from '../../css/Navegar/Nav.module.css';

const { Header, Content, Footer, Sider } = Layout;

function Nav(props) 
{
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#a46922',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header className={styles.header}>
          <div className={styles.organizBlock} />
          <p className={styles.pBiblio}>Biblioteca Virtual</p>
          <p className={styles.pPesquisa}>Pesquisar:</p>
          <Input  placeholder='Insira o nome do livro' className={styles.inputBox}/>
        </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} trigger={null} width={200}
            style={{
              height: 'calc(100vh - 64px)',
              position: 'sticky',
              top: '64px',
              backgroundColor: '#CBB69D',
              color: 'black',
            }}
          >
            <Menu theme="light" mode="inline"
              items={[
                {
                  key: '1',
                  icon: <LoginOutlined />,
                  label: 'Entrar',
                },
                {
                  key: '2',
                  icon: <UserAddOutlined />,
                  label: 'Cadastrar-se',
                },
              ]}
            />
            <CustomCollapse collapsed={collapsed} onCollapse={setCollapsed} className={styles.customCollapse}/>
          </Sider>
          <Layout>
          <Content className={styles.content}>
            <div 
              style={{
                padding: '20px',
                textAlign: 'center',
                background: colorBgContainer
              }}  
            >
              <p>long content</p>
              {/*SIMULA UM GRANDE CONTEÚDO:*/}
              {
                Array.from({ length: 100 }, (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ))
              }
            </div>
          </Content>
            <Footer style={{ textAlign: 'center' }}>Ludmila Gomes @2023 👌</Footer>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default Nav;
