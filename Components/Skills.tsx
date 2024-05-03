import React from 'react'
import SkillItems from './SkillItems'
import SkillsLanguages from './SkillsLanguages'

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Educación & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]
      items-center">
        <div>
            <SkillItems title="React Developer" year="2014 - 2018" />
            <SkillItems title="MERN Stack Developer" year="2016 - 2020" />
            <SkillsLanguages 
            skill1="Html" 
            skill2="CSS" 
            skill3="JavaScript" 
            level1="w-[91%]" 
            level2="w-[88%]"
            level3="w-[80%]"
            />
        </div>
        <div>
            <SkillItems title="Next Js Developer" year="2018 - 2021" />
            <SkillItems title="Node Js Developer" year="2021 - 2023" />
            <SkillsLanguages 
            skill1="React Js" 
            skill2="Next Js" 
            skill3="TypeScript" 
            level1="w-[81%]" 
            level2="w-[78%]"
            level3="w-[60%]"
            />
        </div>
      </div>
    </div>
  )
}

export default Skills
