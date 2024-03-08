import {FaFacebook, FaInstagram,FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer(){
    
        return (
            <footer className= {styles.footer}>
                <ul className= {styles.social_list}>
                    <li className= {styles.list}><FaFacebook/></li>
                    <li className= {styles.list} ><FaInstagram/></li>
                    <li className= {styles.list} ><FaLinkedin/></li>
                </ul>
            <p className={styles.copy_rigth}>
                <span>Task Craft</span> &copy; 2023
            </p>
            </footer>
        )
}


export default Footer