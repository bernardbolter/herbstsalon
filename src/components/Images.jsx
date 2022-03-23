import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { randomNumber } from "../helpers";

import * as styles from '../styles/images.module.scss'

const Images = ({ images }) => {
    return (
        <div className={styles.container} >
            {images.map((img, i) => {
              return (
                <div
                    key={i}
                    className={styles.image}
                >
                    <div 
                        className={styles.imageBackground} 
                        style={{
                            transform: `rotate(${randomNumber(1,4)}deg)`
                        }}    
                    />
                    <GatsbyImage image={img.gatsbyImageData} alt="pal" />
                    <p className={styles.title}>{img.title}</p>
                </div>
            )})}
        </div>
    )
}

export default Images