import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Skills() {
    const [count, setCount] = useState(0)

    return (
        <div id="skills" className="flex h-full w-full flex-1 flex-col"></div>
    )
}

export default Skills
