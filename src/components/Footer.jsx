import React,  { useContext } from 'react'

import { NavContext } from "../providers/NavProvider";

import Dsee from '../svg/Dsee'
import NeuStart from '../svg/NeuStart'
import Stiftung from '../svg/Stiftung'

import Berlin from '../images/berlin.jpg'
import SPK from '../images/spk.png'
import Zwitscher from '../images/zwitscher.jpg'

import * as styles from '../styles/footer.module.scss'

// z-index is 300

const Footer = () => {
    const [nav] = useContext(NavContext)
    return (
        <footer className={styles.container}>
            <div className={styles.funding}>
                <div className={styles.fundBack} />
                <p>gefördert</p>
                <p>durch:</p>
            </div>
            <a 
                className={`${styles.link} ${styles.neustart}`}
                href="https://neustartkultur.de/"
                target="_blank"
                rel="noreferrer"
            >
                <NeuStart />
            </a>
            <a 
                className={`${styles.link} ${styles.stiftung}`}
                href="https://www.kunstfonds.de/"
                target="_blank"
                rel="noreferrer"
            >
                <Stiftung />
            </a>
            <a 
                className={`${styles.link} ${styles.spk}`}
                href="https://www.berlin.de/ba-tempelhof-schoeneberg/politik-und-verwaltung/service-und-organisationseinheiten/sozialraumorientierte-planungskoordination/"    
                target="_blank"
                rel="noreferrer"
            >
                <img src={Berlin} alt="templehof schoeneberg" />
            </a>
            <a
                className={`${styles.link} ${styles.berlin}`}
                href="https://www.berlin.de/ba-tempelhof-schoeneberg/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={SPK} alt="Berlin" />
            </a>
            <a 
                className={`${styles.link} ${styles.dsee}`}
                href="https://www.deutsche-stiftung-engagement-und-ehrenamt.de/"
                target="_blank"
                rel="noreferrer"
            >
                <Dsee />
            </a>
            <a
                className={`${styles.link} ${styles.zwitscher}`}
                href="http://www.zwitschermaschine-berlin.de/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Zwitscher} alt="zwitscher maschine logo" />
            </a>
        </footer>
    )
} 

export default Footer