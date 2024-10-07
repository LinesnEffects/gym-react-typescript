import { SelectedPage, ClassType } from '../../shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '../../shared/HText'
import Class from './Class'

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Join our gym and discover the perfect weight class for you! Whether you're a beginner or seasoned pro, we offer tailored programs to help you achieve your fitness goals. Get started today!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Join our gym and discover the perfect weight class for you! Whether you're a beginner or seasoned pro, we offer tailored programs to help you achieve your fitness goals. Get started today!",
    image: image2,
  },
  {
    name: "Core Workout Classes",
    description: "Join our gym and discover the perfect weight class for you! Whether you're a beginner or seasoned pro, we offer tailored programs to help you achieve your fitness goals. Get started today!",
    image: image3,
  },
  {
    name: "Adenture Classes",
    description: "Join our gym and discover the perfect weight class for you! Whether you're a beginner or seasoned pro, we offer tailored programs to help you achieve your fitness goals. Get started today!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "Join our gym and discover the perfect weight class for you! Whether you're a beginner or seasoned pro, we offer tailored programs to help you achieve your fitness goals. Get started today!",
    image: image5,
  },
  {
    name: "Training Classes",
    description: "Join our gym and discover the perfect weight class for you! Whether you're a beginner or seasoned pro, we offer tailored programs to help you achieve your fitness goals. Get started today!",
    image: image6,
  },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return <section id='ourclasses' className='w-full bg-primary-100 py-40'>
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
        className='mx-auto w-5/6'
        initial='hidden'
        whileInView='visible'
        viewport={{ once:true, amount:0.5 }}
        transition={{ duration:0.5 }}
        variants={{
          hidden: { opacity:0, x:-50 },
          visible: { opacity:1, x:0 },
        }}
      >
        <div className='md:w-3/5'>
          <HText>Our Classes</HText>
          <p className='py-5'>
            Get Fit with Us! Join our dynamic classes where you'll find everything from high-energy Zumba and challenging HIIT to calming yoga and strength training. All levels welcome! Enjoy expert instruction, a supportive community, and a fun atmosphere. Sign up today and transform your fitness journey!
          </p>
        </div>
      </motion.div>     
      <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
        <ul className='w-[2800px] whitespace-nowrap'>
          {classes.map((item: ClassType, index) => (
            <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div> 
    </motion.div>
  </section>
}

export default OurClasses