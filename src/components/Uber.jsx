import React, { useContext, useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { motion } from 'framer-motion'
import { NavContext } from "../providers/NavProvider"

import { renderRichText } from 'gatsby-source-contentful/rich-text'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

import { useWindowSize } from "../hooks/useWindowSize"

import * as styles from '../styles/uber.module.scss' 

const Uber = () => {
    const data = useStaticQuery(graphql`
    query UberQuery {
        contentfulUber {
          notesDeutsch {
            raw
          }
          uberDeutsch {
            raw
          }
          uberEnglish {
            raw
          }
          notesEnglish {
            raw
          }
        }
      }
    `)

    const size = useWindowSize()

    const containerWidth = useMemo(() => {
      if (size.width > 768) {
        return size.width * .8
      } else {
        return size.width
      }
    }, [size.width])

    console.log("con width: ", containerWidth)

    const [nav, setNav] = useContext(NavContext)

    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <b>{text}</b>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
      }
    }

    // console.log(data.contentfulUber)

    return (
        <motion.section
            initial={{
              translateX: containerWidth
            }}
            animate={nav.uberOpen 
              ? { translateX: 0, skewX: -1}
              : { translateX: containerWidth}
            }
            transition={{
              duration: .5
            }}
            className={styles.container}
            style={{
              width: containerWidth
            }}
        >
            <div 
              style={{
                background: nav.colors.uber
              }} 
              className={styles.back}  
            />
            <div className={styles.textWrap}>
              <div className={styles.text}>{renderRichText(data.contentfulUber.uberDeutsch, options)}</div>
              <div className={styles.notes}>{renderRichText(data.contentfulUber.notesDeutsch, options)}</div>
            </div>
        </motion.section>
    )
}

export default Uber