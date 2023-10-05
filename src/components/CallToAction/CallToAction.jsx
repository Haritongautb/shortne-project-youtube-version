import { motion } from "framer-motion";

import classes from './CallToAction.module.scss';

import { MButton } from 'components/Button'


const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2
    }
  })
}

const btnAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

// I. Если непонятно, то все объяснения в Компонента Hero, Features, Button
const CallToAction = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: false }}
      className={classes.CallToAction}
      style={{ overflow: "hidden" }}>
      <h2 variants={textAnimation}>Boost your links today</h2>
      <MButton variants={btnAnimation}>Get Started</MButton>
    </motion.section>
  )
}

export { CallToAction };