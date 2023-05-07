import styles from '../styles/loading.module.scss'
import { useEffect, useState } from 'react'

export default function Loading({ isLoading }) {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setIsHidden(false)
      return
    }
    const timer = setTimeout(() => {
      setIsHidden(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [isLoading])

  return (
    <div className={`${styles.loading} ${isHidden ? styles.hidden : ''}`}>
      <h1 className={styles.title}>My Portfolio</h1>
    </div>
  )
}
