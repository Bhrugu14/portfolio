import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import { Text } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { increment } from '../../store/user'

const Home = () => {
    //   const [count, setCount] = useState(0);

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div className="flex h-screen flex-1">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <Text>Home</Text>
            <div className="card">
                <button
                    onClick={() =>
                        document.documentElement.classList.toggle('dark')
                    }
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default Home
