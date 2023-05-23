import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn } from "../utils/motion"

const Tech = () => {
  return (
    <motion.section
    variants={fadeIn("up","spring",2,2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:true, amount:0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          {/* <center><p>{technology.name}</p></center> */}
        </div>
      ))}
    </div>
    </motion.section>
  )
}

export default Tech