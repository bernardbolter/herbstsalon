import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from '../styles/megacities.module.scss'

const Megacities = ({ megacities }) => {

    return (
        <div className={styles.container}>
            {megacities.map((city, i) => {
                return (
                    <div key={i} className={styles.megacity}>
                        <div className={styles.megaBackground} />
                        <div className={styles.title}>
                            <h1>{city.title}</h1>
                            {city.englishTitle && <h2>{city.englishTitle}</h2>}
                        </div>
                        <GatsbyImage image={city.megacity.gatsbyImageData} alt="megacity" />
                            {city.city.map(city => (
                                <div className={styles.cityContainer}>
                                    <h1>{city.name}</h1>
                                    {city.englishName && <h2>{city.englishName}</h2>}
                                    <h3>{city.population}</h3>
                                </div>
                            ))}
                        <div className={styles.cityLine} />
                        <p className={styles.total}>{city.totalPopulation}</p>
                    </div>
                    )
                }
            )}
        </div>
    )
}

export default Megacities