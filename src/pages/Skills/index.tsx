import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Text } from '../../components'
import IcReact from '../../assets/skills/atom.png'
import { skillsData } from './Constant'

function Skills() {
    const [count, setCount] = useState(0)

    return (
        <div
            id="skills"
            className="row-span-1 flex h-full w-full flex-1 flex-col overflow-x-hidden py-5"
        >
            <div className="">
                <Text className="px-5 text-2xl  text-slate-200">Skills</Text>
                <div className="grid h-20 grid-cols-3 px-5 py-2 md:grid-cols-8 lg:grid-cols-12">
                    {skillsData.map((i, k) => (
                        <div
                            key={k}
                            className="relative mb-4 flex h-20 w-36 cursor-pointer flex-col items-center justify-center hover:animate-pulse"
                        >
                            <img
                                src={i.icon}
                                className="z-10 h-20 w-36 bg-slate-900 object-contain hover:z-0 hover:opacity-50"
                            />
                            <Text className="absolute text-slate-50 ">
                                {i.name}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
