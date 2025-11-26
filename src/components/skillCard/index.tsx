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
        <div className="flex flex-1 flex-wrap gap-2 px-5 py-2">
            {data.map((item: SkillItem, index: number) => (
                <div
                    key={index}
                    className="hw-accelerate group relative mb-5 flex h-20 min-w-fit cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="relative h-20 w-36 overflow-hidden rounded-lg bg-slate-900 py-2 shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/30">
                        <img
                            src={item.icon}
                            className={`hw-accelerate h-full w-full object-contain transition-all duration-300 ${
                                hoveredIndex === index
                                    ? 'scale-110 opacity-20'
                                    : 'scale-100 opacity-100'
                            }`}
                            alt={item.name}
                            loading="lazy"
                        />
                        <div
                            className={`custom_scroll_bar hw-accelerate absolute inset-0 flex items-center justify-center overflow-auto bg-gradient-to-br from-orange-500/10 to-slate-900/10 backdrop-blur-sm transition-all duration-300 ${
                                hoveredIndex === index
                                    ? 'z-10 scale-100 opacity-100'
                                    : '-z-10 scale-95 opacity-0'
                            }`}
                        >
                            <Text className="px-2 text-center font-bold text-slate-50 drop-shadow-lg">
                                {item.name}
                            </Text>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
