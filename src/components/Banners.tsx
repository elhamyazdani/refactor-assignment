import React from 'react'
import styles from './banners.module.css'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'

const Banners: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img src={img1} className={styles.banner} alt={'Droppe manufacture'} />
      <img src={img2} className={styles.banner} alt={'Droppe manufacture'} />
    </div>
  )
}

export default Banners
