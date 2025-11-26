import React from 'react'
import { Transition } from '@headlessui/react'
import { useInView } from 'react-intersection-observer'
import { SkillCard, Text } from '../../components'
import { Familiar, skillsData } from './Constant'

const Skills = () => {
    const { ref: skillsRef, inView: skillsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const { ref: familiarRef, inView: familiarInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return (
        <div
            id="skills"
            className="relative row-span-1 flex h-full w-full flex-1 flex-col overflow-x-hidden py-5"
        >
            <div className="absolute bottom-5 right-5 animate-pulse cursor-pointer hover:scale-110 transition-transform duration-300">
                <Text className="cursor-pointer text-white drop-shadow-xl">
                    {'Know More >'}
                </Text>
            </div>

            <div ref={skillsRef}>
                <Transition
                    show={skillsInView}
                    enter="transition-all duration-700 ease-out hw-accelerate"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                >
                    <Text className="px-5 text-2xl font-bold text-slate-200 animate-fade-in-up">
                        {'Skills'}
                    </Text>
                    <SkillCard data={skillsData} />
                </Transition>
            </div>

            <div ref={familiarRef} className="mt-5">
                <Transition
                    show={familiarInView}
                    enter="transition-all duration-700 ease-out delay-200 hw-accelerate"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                >
                    <Text className="px-5 text-2xl font-bold text-slate-200 animate-fade-in-up">
                        {'Familiar'}
                    </Text>
                    <SkillCard data={Familiar} />
                </Transition>
            </div>
        </div>
    )
}

export default Skills
