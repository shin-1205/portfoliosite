import styles from '../styles/loading.module.scss'
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react'

export default function Loading({ isLoading }) {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setIsHidden(false);
      const loadingElement = document.querySelector('.loading');
      if (loadingElement) {
        loadingElement.classList.add(styles.fadeIn);
      }
    } else {
      const loadingElement = document.querySelector('.loading');
      if (loadingElement) {
        loadingElement.classList.remove(styles.fadeIn);
        loadingElement.classList.add(styles.fadeOut);
        loadingElement.addEventListener('transitionend', () => {
          setIsHidden(true);
        }, { once: true });
      }
    }
  }, [isLoading])


  return (
    <div className={`${styles.loading} ${isHidden ? styles.hidden : ''} ${isLoading ? styles.fadeIn : styles.fadeOut}`}>
      <h1 className={`${styles.title} ${isLoading ? styles.fadeIn : 'fadeIn'}`}>
        <Typewriter
          options={{
            strings: [
              'My Portfolio'
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  )
}
