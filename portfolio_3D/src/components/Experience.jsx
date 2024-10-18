import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css';

import SectionWrapper from '../hoc'
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";

//Card with timeline
const ExperienceCard = ({experience}) => (
    <VerticalTimelineElement 
    contentStyle={{
        background: '#1d1836', 
        color: '#fff'}
    }
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    iconStyle={{background: experience.iconBg}}
    icon={
        <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
    }
    >
    <div className="text-white text-[24px] text-bold">
    <h3>{experience.title}</h3>
    <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
    <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>

    </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
        <motion.div variants={textVariant()} >
            <p className={styles.sectionSubText}>What I have Done so Far</p>
            <h2 className={styles.sectionHeadText}>Work Experience <i className="text-[15px]">(Obviously Fake)  </i></h2>
        </motion.div>
        <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard 
                    key={`experience-${index}`}
                    experience={experience}
                    />
                ))}
            </VerticalTimeline>
        </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')