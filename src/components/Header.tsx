import React from 'react'
import styles from './header.module.css'
import logo from '../images/droppe-logo.png'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.headerImageWrapper}`}>
        <img src={logo} className={styles.headerImage} alt={'Droppe Company'}/>
      </div>
    </div>
  )
}

export default Header