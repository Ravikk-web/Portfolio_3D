import SectionWrapper from '../hoc'
import { technologies } from '../constants'
import {BallCanvas} from './canvasContainer'

const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
            <div className='w-28 h-28' key={tech.name}>
            <BallCanvas 
              icon={tech.icon}
            />
            <p className=" text-secondary flex flex-row flex-wrap justify-center gap-4">{tech.name}</p>
            </div>
        ))}
    </div>
  )
}

export default SectionWrapper(Skills, '')