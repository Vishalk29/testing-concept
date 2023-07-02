import { useState } from 'react'
import { skillProps } from './Skills.types'
const Skills = (props: skillProps) => {
  const { skills } = props
  const [isLogin, setIslogin] = useState(false)
  return (
    <>
      <ul>
        {skills.map((skill, key) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLogin ? (
        <button>start learning</button>
      ) : (
        <button onClick={() => setIslogin(true)}>login</button>
      )}
    </>
  )
}

export default Skills
