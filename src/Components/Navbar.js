
import hamburgerLogo from '../Assets/Hamburger Menu.svg'
import logo from '../Assets/Logo.svg'
import styles from '../StyleSheets/Navbar.module.css'


function Navbar(){
  return(
    <>
    <div className={styles.navMainContainer}>
    <div className={styles.navBar}>
      <img className={styles.navBarLogo} src={logo} alt="navbarLogo"/>
      <div className={styles.navBarPart2}>
        <h6>Home</h6>
        <h6>Category</h6>
        <h6>About</h6>
        <h6>Contact</h6>
        <img className={styles.hamburgerLogo} src={hamburgerLogo} alt='hamburgerLogo'/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar;