import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import styles from '../../css/Navegar/CustomCollapse.module.css'

function CustomCollapseButton({ collapsed, onCollapse })
{
  return (
    <div className={styles.customCollapseButton} onClick={() => onCollapse(!collapsed)}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  );
};

export default CustomCollapseButton;