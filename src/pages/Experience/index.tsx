import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

const data = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
]

function Experience() {
    const [count, setCount] = useState(0)
    const [ArrayData, setData] = useState(data)

    return (
        <div id="projects" className="flex h-full w-full flex-1 flex-col">
            <div className="grid grid-cols-4 gap-3">
                {ArrayData.map((i, k) => (
                    <ReactCardFlip
                        isFlipped={i.isOpen}
                        flipDirection="horizontal"
                    >
                        <div
                            className="h-52 bg-white"
                            onMouseEnter={() => {
                                ArrayData[k].isOpen = true
                                setData(ArrayData)
                                setCount(count + 1)
                            }}
                            onMouseLeave={() => {
                                ArrayData[k].isOpen = false
                                setData(ArrayData)
                                setCount(count + 1)
                            }}
                        >
                            front of the card.
                        </div>
                        <div className="h-52 bg-black">back of the card.</div>
                    </ReactCardFlip>
                ))}
            </div>
        </div>
    )
}

export default Experience
