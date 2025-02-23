import { motion } from "framer-motion";

import classes from './Hero.module.scss';
import { MButton } from 'components/Button';
import Img from 'images/illustration-working.svg';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2
    }
  })

}

// I. Заметь, чтобы зааминировать именно дочернего элемента Комопнента (не тега), в нашем случае - это компонент Button (этот комопонент изначально назывался Button) нужно уже идти в этот компонент и сделать кое-какие манипуляции (это завернуть его в forwardRef прописать атрибут куа для тега Button и импортировать уже MButton)
const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={`${classes.hero} container`}>
      <div className={classes.imgContainer}>
        <img src={Img} alt="hero" className={classes.img} />
      </div>
      <article className={classes.text}>
        <motion.h1 custom={1} variants={textAnimation} className={classes.title}>More than just shorter links</motion.h1>
        <motion.p custom={2} variants={textAnimation} className={classes.description}>Build your brand's recognition and get detailed insights on how your links are performing.</motion.p>

        <MButton custom={2} variants={textAnimation} size="large">Get Started</MButton>
      </article>
    </motion.section>
  )
}

export { Hero };
