import { Transition, Dialog } from '@headlessui/react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Text } from '../../components'
import { data } from './constant'

function Experience() {
    const [selectedCard, setSelectedCard] = useState<number | null>(null)
    const { ref: exRef, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const handleCardClick = (index: number) => {
        setSelectedCard(index)
    }

    const selectedProject = selectedCard !== null ? data[selectedCard] : null

    return (
        <div id="projects" className="flex h-full w-full flex-1 flex-col p-5">
            <div ref={exRef} />
            <Transition className={'h-full w-full'} show={inView} appear={true}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((project, index) => (
                        <Transition.Child
                            key={'Project' + index}
                            className="hw-accelerate"
                            enter={`transition transform duration-700 ease-out`}
                            enterFrom={`scale-75 opacity-0 -translate-y-4`}
                            enterTo="scale-100 opacity-100 translate-y-0"
                            style={{
                                transitionDelay: `${index * 80}ms`,
                                animationDelay: `${index * 80}ms`,
                                animationFillMode: 'both',
                            }}
                        >
                            <div
                                className={`hw-accelerate group relative h-52 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:scale-105`}
                                style={{ perspective: '1000px' }}
                                onClick={() => handleCardClick(index)}
                            >
                                {/* 3D flip card container */}
                                <div
                                    className={`relative h-full w-full transition-transform duration-700 ease-out`}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    {/* Front of card */}
                                    <div
                                        className="hw-accelerate group-hover:rotate-y-6 absolute inset-0 flex h-full flex-col content-center items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 px-3 shadow-xl shadow-slate-700/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-orange-500/40"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                        }}
                                    >
                                        <Text className="text-center text-xl font-black text-white no-underline decoration-1 underline-offset-4 antialiased transition-transform duration-300 group-hover:underline">
                                            {project.name}
                                        </Text>
                                        <div className="mt-3 text-center text-sm italic text-gray-100 opacity-90">
                                            {project.skills.join(', ')}
                                        </div>
                                        <div className="group-hover absolute -bottom-8 right-3 opacity-70 transition-all duration-300 group-hover:bottom-3 group-hover:animate-slide-up">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 256 256"
                                            >
                                                <g
                                                    className="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                                                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                                                >
                                                    <path
                                                        d="M 69.416 43.298 H 68.97 c -0.983 0 -1.917 0.216 -2.756 0.603 c -0.644 -2.975 -3.295 -5.21 -6.459 -5.21 h -0.447 c -1.128 0 -2.19 0.284 -3.12 0.784 c -1 -2.379 -3.355 -4.054 -6.094 -4.054 h -0.447 c -0.925 0 -1.807 0.191 -2.606 0.536 v -9.458 c 0 -3.644 -2.964 -6.607 -6.608 -6.607 h -0.447 c -3.643 0 -6.607 2.964 -6.607 6.607 v 24.261 l -3.005 2.281 c -2.394 1.817 -3.911 4.461 -4.273 7.444 c -0.362 2.984 0.479 5.914 2.37 8.251 l 9.378 11.594 v 4.608 c 0 2.791 2.271 5.063 5.062 5.063 h 23.411 c 2.791 0 5.063 -2.271 5.063 -5.063 l 0.001 -4.375 c 2.996 -3.766 4.639 -8.438 4.639 -13.242 V 49.905 C 76.023 46.262 73.06 43.298 69.416 43.298 z M 72.023 67.32 c 0 4.102 -1.478 8.088 -4.159 11.224 c -0.311 0.362 -0.48 0.823 -0.48 1.3 v 5.094 c 0 0.586 -0.477 1.063 -1.063 1.063 H 42.911 c -0.585 0 -1.062 -0.477 -1.062 -1.063 v -5.316 c 0 -0.458 -0.157 -0.902 -0.445 -1.258 L 31.581 66.22 c -1.204 -1.488 -1.74 -3.354 -1.509 -5.254 c 0.23 -1.899 1.197 -3.583 2.721 -4.74 l 0.586 -0.444 v 5.495 c 0 1.104 0.896 2 2 2 s 2 -0.896 2 -2 v -9.506 c 0 -0.014 0 -0.026 0 -0.04 V 26.498 c 0 -1.438 1.169 -2.607 2.607 -2.607 h 0.447 c 1.438 0 2.607 1.17 2.607 2.607 v 15.53 c 0 0 0 0 0 0.001 s 0 0 0 0.001 l 0.01 12.917 c 0.001 1.104 0.896 1.998 2 1.998 c 0 0 0.001 0 0.001 0 c 1.104 -0.001 1.999 -0.896 1.998 -2.002 L 47.04 42.028 c 0 -1.438 1.169 -2.607 2.606 -2.607 h 0.447 c 1.438 0 2.607 1.17 2.607 2.607 v 3.27 c 0 0 0 0.001 0 0.001 c 0 0 0 0.001 0 0.001 l 0.009 9.647 c 0.001 1.104 0.896 1.998 2 1.998 c 0.001 0 0.001 0 0.002 0 c 1.104 -0.001 1.999 -0.897 1.998 -2.002 l -0.009 -9.646 c 0 -1.438 1.169 -2.607 2.606 -2.607 h 0.447 c 1.438 0 2.607 1.17 2.607 2.607 v 4.088 c -0.006 0.066 -0.02 0.13 -0.02 0.197 l 0.01 5.366 c 0.002 1.104 0.897 1.996 2 1.996 c 0.001 0 0.002 0 0.004 0 c 1.104 -0.002 1.998 -0.899 1.996 -2.004 l -0.009 -4.852 c 0.006 -0.062 0.019 -0.121 0.019 -0.184 c 0 -1.438 1.17 -2.607 2.607 -2.607 h 0.446 c 1.438 0 2.607 1.17 2.607 2.607 V 67.32 z"
                                                        className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
                                                        transform=" matrix(1 0 0 1 0 0) "
                                                        stroke-linecap="round"
                                                        fill="rgba(255, 255, 255, 1)"
                                                    />
                                                    <path
                                                        d="M 63.994 25.511 H 51.79 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 12.204 c 1.104 0 2 0.896 2 2 S 65.099 25.511 63.994 25.511 z"
                                                        className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
                                                        transform=" matrix(1 0 0 1 0 0) "
                                                        stroke-linecap="round"
                                                        fill="rgba(255, 255, 255, 1)"
                                                    />
                                                    <path
                                                        d="M 39.985 16.204 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 12.204 C 41.985 15.309 41.09 16.204 39.985 16.204 z"
                                                        className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
                                                        transform=" matrix(1 0 0 1 0 0) "
                                                        stroke-linecap="round"
                                                        fill="rgba(255, 255, 255, 1)"
                                                    />
                                                    <path
                                                        d="M 48.558 18.441 c -0.512 0 -1.023 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 8.63 -8.629 c 0.781 -0.781 2.047 -0.781 2.828 0 c 0.781 0.781 0.781 2.047 0 2.828 l -8.63 8.629 C 49.581 18.246 49.069 18.441 48.558 18.441 z"
                                                        className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
                                                        transform=" matrix(1 0 0 1 0 0) "
                                                        stroke-linecap="round"
                                                        fill="rgba(255, 255, 255, 1)"
                                                    />
                                                    <path
                                                        d="M 28.181 25.511 H 15.977 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 12.204 c 1.104 0 2 0.896 2 2 S 29.285 25.511 28.181 25.511 z"
                                                        className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
                                                        transform=" matrix(1 0 0 1 0 0) "
                                                        stroke-linecap="round"
                                                        fill="rgba(255, 255, 255, 1)"
                                                    />
                                                    <path
                                                        d="M 31.413 18.441 c -0.512 0 -1.024 -0.195 -1.414 -0.586 L 21.37 9.226 c -0.781 -0.781 -0.781 -2.047 0 -2.828 c 0.78 -0.781 2.048 -0.781 2.828 0 l 8.629 8.629 c 0.781 0.781 0.781 2.047 0 2.828 C 32.437 18.246 31.925 18.441 31.413 18.441 z"
                                                        className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
                                                        transform=" matrix(1 0 0 1 0 0) "
                                                        stroke-linecap="round"
                                                        fill="rgba(255, 255, 255, 1)"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    ))}
                </div>
            </Transition>

            {/* Modal for project details */}
            <Transition appear show={selectedCard !== null} as="div">
                <Dialog
                    as="div"
                    className="relative z-50"
                    onClose={() => setSelectedCard(null)}
                >
                    <Transition.Child
                        as="div"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as="div"
                                enter="ease-out duration-500"
                                enterFrom="opacity-0 scale-75 rotate-12"
                                enterTo="opacity-100 scale-100 rotate-0"
                                leave="ease-in duration-300"
                                leaveFrom="opacity-100 scale-100 rotate-0"
                                leaveTo="opacity-0 scale-75 -rotate-12"
                            >
                                <Dialog.Panel className="hw-accelerate w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 p-6 shadow-2xl shadow-orange-500/50 transition-all">
                                    {selectedProject && (
                                        <>
                                            <div className="mb-4 flex items-start justify-between">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="animate-fade-in-up flex-1 text-2xl font-bold text-white"
                                                >
                                                    {selectedProject.name}
                                                </Dialog.Title>
                                                <button
                                                    type="button"
                                                    className="hw-accelerate rounded-full bg-white/20 p-2 transition-all duration-300 hover:rotate-90 hover:bg-white/30"
                                                    onClick={() =>
                                                        setSelectedCard(null)
                                                    }
                                                >
                                                    <svg
                                                        className="h-5 w-5 text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="mb-4 border-b border-orange-400/30 pb-4">
                                                <p className="text-sm italic text-gray-100">
                                                    <span className="font-semibold text-white">
                                                        Technologies:{' '}
                                                    </span>
                                                    {selectedProject.skills.join(
                                                        ', '
                                                    )}
                                                </p>
                                            </div>

                                            <div className="custom_scroll_bar max-h-[60vh] overflow-y-auto pr-2">
                                                <h4 className="mb-3 text-lg font-semibold text-white">
                                                    Project Details
                                                </h4>
                                                <ul className="space-y-3">
                                                    {selectedProject.points.map(
                                                        (point, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="animate-slide-in-left flex items-start gap-3 text-gray-100"
                                                                style={{
                                                                    animationDelay: `${
                                                                        idx * 80
                                                                    }ms`,
                                                                    animationFillMode:
                                                                        'both',
                                                                }}
                                                            >
                                                                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-300" />
                                                                <span className="text-sm leading-relaxed">
                                                                    {point}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default Experience
