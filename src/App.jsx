import styles from './style'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <section className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
            Navbar
        </div>
      </section>

      <section className={`bg-primary ${styles.flexStart}`}>
          <div className= {`${styles.boxWidth}`}>
            Hero sect
          </div>
      </section>

      <section className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className= {`${styles.boxWidth}`}>
            Stats
          </div>
      </section>
    </div>
  )


export default App