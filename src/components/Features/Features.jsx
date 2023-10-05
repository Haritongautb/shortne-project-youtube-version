import { motion } from "framer-motion";
import { forwardRef } from "react";


import classes from './Features.module.scss';

import { features } from './data';

const textAnimation = {
  hidden: {
    y: 100,
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

const featureAnimation = {
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

// II. Для чего нужен forwardRef и в общем писать ref загляни в компонент Hero - там все объяснение (будет пример с MButton)
// whileInView="visible" Свойство whileInView в библиотеке Framer Motion позволяет вам определить анимации или стили, которые будут применяться к элементу, пока этот элемент находится во вьюпорте (области видимости окна браузера).
// viewport - Когда viewport установлено в { amount: 0.2 }, это означает, что элемент будет анимироваться, когда он появится во вьюпорте окна на 20% своей высоты. 
// viewport={{once: false}} - При скролле обратно к этому элементу анимации снова повторится (true - отлючит анимацию)

/* III. 
  Для чего мы вставили еще раз 
          это 
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}

          в 
          <div>
            <MFeatureItem />
          </div>

          и написали для него motion ????
  Ответ:
    Мы так сделали, чтобы <div><MFeatureItem/></div> был независимым компонентом в плане анимации, потому что в <motion.section></motion.section> v s дали vieport amount * 0.2 и при скролла до блока h2 анимация срабатывалась и для <h2></h2>, и для <p></p>, и для <MFeatureItem />, а мы хотим, чтобы блок с <MFeatureItem /> был независимым и только при скролле до них и видимость было 20% именно этого блока срабатывалась анимация, вот поэтому мы и прописали для <div><MFeatureItem /></div> отдельно          
          это  
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          и дали ему motion и теперь о выглядит так
          <motion.div></motion.div>

*/
const Features = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: false }}
      className={classes.Features}>
      <div className="container">
        <motion.h2 custom={1} variants={textAnimation} className={classes.title}>{features.title}</motion.h2>
        <motion.p custom={2} variants={textAnimation} className={classes.description}>{features.description}</motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: false }}
          className={classes.items}>
          {features.items.map((item, index) => (
            <MFeatureItem custom={index + 3} variants={featureAnimation} key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}


// I. Чтобы не писать return он поставил круглые скобки
const FeatureItem = forwardRef(({ title, body, icon }, ref) => (
  <article
    ref={ref}
    className={classes.item}>
    <figure>
      <img src={icon} alt={title} />
    </figure>
    <h3>{title}</h3>
    <p>{body}</p>
  </article>
))

const MFeatureItem = motion(FeatureItem);

export { Features };