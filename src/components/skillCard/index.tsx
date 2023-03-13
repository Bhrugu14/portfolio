import React from 'react'
import { Text } from '../text'

interface itemType {
    icon: string
    name: string
}

interface dataProps {
    data: object[]
}
export const SkillCard = ({ data }: any) => {
    return (
        <div className="grid grid-cols-3 px-5 py-2 md:grid-cols-8 lg:grid-cols-12">
            {data.map((i: itemType, k: number) => (
                <div
                    key={k}
                    className="relative mb-5 flex h-20 w-36 cursor-pointer flex-col items-center justify-center hover:animate-pulse"
                >
                    <img
                        src={i.icon}
                        className="h-20 w-36 bg-slate-900 object-contain hover:opacity-50"
                        alt={'img'}
                    />
                    <Text className="absolute -z-10 h-20 w-36 text-center text-slate-50 hover:z-10">
                        {i.name}
                    </Text>
                </div>
            ))}
        </div>
    )
}
