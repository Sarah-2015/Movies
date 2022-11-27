import React from 'react'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div  className=' h-100 py-5 my-5 text-center'>
        <div className={styles.ldsspinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

