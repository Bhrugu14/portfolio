import React, { useState } from 'react'
import { Text } from '../text'

interface SkillItem {
    icon: string
    name: string
}

interface SkillCardProps {
    data: SkillItem[]
}

export const SkillCard = ({ data }: SkillCardProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="flex flex-1 flex-wrap px-5 py-2">
            {data.map((item: SkillItem, index: number) => (
                <div
                    key={index}
                    className="group relative mb-5 flex h-20 min-w-fit cursor-pointer flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <img
                        src={item.icon}
                        className={`h-20 w-36 bg-slate-900 object-contain transition-opacity duration-300 ${
                            hoveredIndex === index
                                ? 'opacity-30'
                                : 'opacity-100'
                        }`}
                        alt={item.name}
                        loading="lazy"
                    />
                    <div
                        className={`custom_scroll_bar absolute flex h-20 w-36 items-center justify-center overflow-auto transition-all duration-300 ${
                            hoveredIndex === index
                                ? 'z-10 opacity-100'
                                : '-z-10 opacity-0'
                        }`}
                    >
                        <Text className="text-center font-bold text-slate-50">
                            {item.name}
                        </Text>
                    </div>
                </div>
            ))}
        </div>
    )
}
