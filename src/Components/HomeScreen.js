import styles from '../StyleSheets/HomeScreen.module.css'
import viewIntro from '../Assets/view-into.svg'
import showCase from '../Assets/Showcase.png'
import showCaseMobile from '../Assets/Showcase-mobile.png'


function HomeScreen(){
  return(
    <>
    <div className={styles.mainContainer}>

      <div className={styles.leftContainer}>
        <div className={styles.leftHeadingPart}>
          <h2>One More Friend</h2>
          <h3>Thousands More Fun!</h3>
        </div>

        <div className={styles.leftParaPart}>
          <span>Having a pet means you have more joy, a new friend, a <br></br>happy person who will always be with you to have fun. We <br></br> have 200+ different pets that can meet your needs!</span>
        </div>

        <div className={styles.leftIconPart}>
          <img className={styles.viewIntro} src={viewIntro} alt='viewIntroImage'/>
          <button className={styles.exploreNowBtn}>Explore Now</button>
        </div>

      </div>

      <div className={styles.rightContainer}>
          <img className={styles.showCase} src={showCase} alt='showCaseImage'/>
          <img className={styles.showCaseMobile} src={showCaseMobile} alt='showCaseMobile'/>
      </div>

    </div>

    </>
  )
}

export default HomeScreen;