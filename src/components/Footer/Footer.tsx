import React from 'react'
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={styles.info}>
      <p>Click to edit a todo</p>
      <p>
        Created by <a href="https://dadashow.netlify.app/">Suleyman Dadashov</a>
      </p>
      <p>
        Source <a href="https://github.com/Suleyman1406/PatikaReactWork2">Code</a>
      </p>
    </footer>
  )
}

export default Footer
