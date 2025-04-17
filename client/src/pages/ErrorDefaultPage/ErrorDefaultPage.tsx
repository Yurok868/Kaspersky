import React from 'react'
import styles from './ErrorDefaultPage.module.css'

export default function ErrorDefaultPage(): React.ReactElement {
  return (
    <div className={styles.conteiner}>
        <div className={styles.error}>Uh-oh! There is no such page.</div>
    </div>
  )
}
