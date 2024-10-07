import ActionButton from "../../shared/ActionButton"
import HText from "../../shared/HText"
import { SelectedPage, BenefitType } from "../../shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "Most comfortable and convenient facilities",
    description: "Our facilities are designed to get the better space and environment for every class or session purpose within just walking seconds from one to another."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "Lots and lots of different classes",
    description: "Think that your goal or interest is too uncommon for us? Think again, we have classes and instructors for almost everything."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Best trainers and specialists",
    description: "The best gear wouldn't mean much if used incorrectly. That's why we make sure to have the better trainers in the field to provide the best know how."
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return( 
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial='hidden'
          whileInView='visible'
          viewport={{ once:true, amount:0.5 }}
          transition={{ duration:0.5 }}
          variants={{
            hidden: { opacity:0, x:-50 },
            visible: { opacity:1, x:0 },
          }}
        >
          <HText>NOT JUST A REGULAR GYM.</HText>   
          <p className="my-5 text-sm">
            We have modern specialized equipment, the best trainers and conditioned spaces to get you to your body goals 
            easy as a walk in the park. We know the importance of caring and being aware of every member.
          </p>
        </motion.div>   

        {/* Benefits */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >          
          {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}                
              />
            ))}
        </motion.div>

        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img 
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* Description */}
          <div>
              {/* Title */}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once:true, amount:0.5 }}
                    transition={{ duration:0.5 }}
                    variants={{
                      hidden: { opacity:0, x:50 },
                      visible: { opacity:1, x:0 },
                    }}
                  >
                    <HText>
                      THOUSANDS OF SATISFIED MEMBERS GETTING{" "}
                      <span className="text-primary-500">TIGHT</span>
                    </HText>
                  </motion.div>
                </div>
              </div>

              {/* Description */}
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once:true, amount:0.5 }}
                transition={{ delay: 0.2, duration:0.5 }}
                variants={{
                  hidden: { opacity:0, x:-50 },
                  visible: { opacity:1, x:0 },
                }}
              >
                <p className="my-5">
                  Unleash your potential at our state-of-the-art gym! Enjoy personalized training sessions, energizing group classes, and a welcoming community that motivates you every step of the way.
                </p>
                <p className="mb-5">
                  Whether you're a beginner or a fitness enthusiast, we have something for everyone. Join us today and kickstart your transformation—your first class is free!
                </p>
              </motion.div>

              {/* Button */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
              </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits