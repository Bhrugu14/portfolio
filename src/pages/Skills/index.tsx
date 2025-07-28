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
            <div className="absolute bottom-5 right-5 animate-pulse cursor-pointer">
                <Text className="cursor-pointer text-white drop-shadow-xl">
                    {'Know More >'}
                </Text>
            </div>

            <div ref={skillsRef}>
                <Transition
                    show={skillsInView}
                    enter="transition-all duration-1000 ease-out"
                    enterFrom="opacity-0 translate-y-8"
                    enterTo="opacity-100 translate-y-0"
                >
                    <Text className="px-5 text-2xl text-slate-200">
                        {'Skills'}
                    </Text>
                    <SkillCard data={skillsData} />
                </Transition>
            </div>

            <div ref={familiarRef} className="mt-5">
                <Transition
                    show={familiarInView}
                    enter="transition-all duration-1000 ease-out delay-300"
                    enterFrom="opacity-0 translate-y-8"
                    enterTo="opacity-100 translate-y-0"
                >
                    <Text className="px-5 text-2xl text-slate-200">
                        {'Familiar'}
                    </Text>
                    <SkillCard data={Familiar} />
                </Transition>
            </div>
        </div>
    )
}

export default Skills
