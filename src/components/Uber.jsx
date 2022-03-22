import React, { useContext, useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { motion, AnimatePresence } from 'framer-motion'
import { NavContext } from "../providers/NavProvider"

import Language from './Language'

import { renderRichText } from 'gatsby-source-contentful/rich-text'
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


    const [nav, setNav] = useContext(NavContext)

    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <b>{text}</b>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
      }
    }

    return (
        <motion.section
            initial={{
              translateX: 0,
              skewX: -1
            }}
            animate={nav.uberOpen 
              ? { translateX: nav.uberContainerWidthNeg, skewX: -1}
              : { translateX: 6, skewX: -1}
            }
            transition={{
              duration: .5
            }}
            className={styles.container}
            style={{
              width: nav.uberContainerWidth,
              right: nav.uberContainerWidthNeg
            }}
        >
            <div 
              style={{
                background: nav.colors.uber
              }} 
              className={styles.back}  
            />
            <div className={styles.textWrap}>
              <div className={styles.headerWrap}>
                <p className={styles.header}>HERBSTSALON! <span className={styles.red}>Komm!</span> Ins Offene</p>
                <Language />
              </div>

              <AnimatePresence exitBeforeEnter>
                { nav.deutsch
                  ? (
                    <motion.div
                      key="deutsch"
                      initial={{opacity: 0}}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0}}
                      transition={{ duration: .3}}
                    >
                      <div className={styles.text}>
                        {renderRichText(data.contentfulUber.uberDeutsch, options)}
                      </div>
                      <div className={styles.notes}>
                        {renderRichText(data.contentfulUber.notesDeutsch, options)}
                      </div>
                    </motion.div>
                  )
                  : (
                    <motion.div 
                      key="english"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: .3 }}
                    >
                       <div className={styles.text}>
                        {renderRichText(data.contentfulUber.uberEnglish, options)}
                      </div>
                      <div className={styles.notes}>
                        {renderRichText(data.contentfulUber.notesEnglish, options)}
                      </div>
                    </motion.div>
                  )
                }
              </AnimatePresence>
            </div>
        </motion.section>
    )
}

export default Uber