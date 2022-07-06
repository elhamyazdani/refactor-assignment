import React from 'react'
import styles from '../shopApp.module.css'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'

const Banners: React.FC = () => {
  return (
    <>
      <span
        className={['container', styles.main].join(' ')}
        style={{
          margin: '50px inherit',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <img src={img1} style={{ maxHeight: '15em', display: 'block' }} />
        <img src={img2} style={{ maxHeight: '15rem', display: 'block' }} />
      </span>
    </>
  )
}

export default Banners
