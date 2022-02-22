import React from 'react'
import { motion } from "framer-motion";

import * as styles from '../styles/karte.module.scss'

const KarteNav = () => {
    return (
        <motion.nav
            className={styles.container}
        >
            <p>karte nav</p>
        </motion.nav>
    )
}

export default KarteNav