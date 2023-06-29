import { skillProps } from './Skills.types'
const Skills = (props: skillProps) => {
  const { skills } = props
  return (
    <>
      <ul>
        {skills.map((skill, key) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </>
  )
}

export default Skills
