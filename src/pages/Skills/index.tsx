import React from 'react'
import { SkillCard, Text } from '../../components'
import { Familiar, skillsData } from './Constant'

const Skills = () => {
    return (
        <div
            id="skills"
            className="relative row-span-1 flex h-full w-full flex-1 flex-col overflow-x-hidden py-5"
        >
            <div className="absolute bottom-5 right-5 animate-pulse cursor-pointer ">
                <Text className="cursor-pointer text-white drop-shadow-xl">
                    {'Know More >'}
                </Text>
            </div>
            <div className="">
                <Text className="px-5 text-2xl  text-slate-200">
                    {'Skills'}
                </Text>
                <SkillCard data={skillsData} />
            </div>
            <div className="mt-5">
                <Text className="px-5 text-2xl  text-slate-200">
                    {'Familiar'}
                </Text>
                <SkillCard data={Familiar} />
            </div>
        </div>
    )
}

export default Skills
