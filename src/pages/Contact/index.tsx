import React, { useEffect, useState } from 'react'
import Viewer, { Worker } from '@phuocng/react-pdf-viewer'
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css'
import CV from '../../assets/doc/Bhrugu_Resume.pdf'
import { ContactsData } from './constant'
import { Text } from '../../components'

const Contact = () => {
    const [file, setFile] = useState(false)

    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noreferrer')
    }

    return (
        <div className="flex w-screen flex-col justify-center">
            <div className="grid w-screen grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
                <div className="mx-4 mb-5 flex flex-col">
                    <Text className="pt-5  text-2xl text-slate-200">Sites</Text>
                    {ContactsData.map((i, k) => (
                        <div
                            key={k + 'ContactsData'}
                            className="mt-2 flex cursor-pointer items-center bg-orange-600 p-1 hover:-translate-y-1.5 hover:animate-pulse"
                            onClick={() => openInNewTab(i.link)}
                        >
                            <img
                                src={i.icon}
                                className="h-16 w-16 rounded bg-orange-300 object-fill p-2"
                                alt={'site'}
                            />
                            <Text className="cursor-pointer pl-5 text-lg font-bold text-white">
                                {i.name}
                            </Text>
                        </div>
                    ))}
                    <Text className="my-5 text-2xl text-slate-200">
                        Contact Me
                    </Text>
                    <div className="grid h-16 grid-cols-1 gap-5 md:grid-cols-2">
                        <a
                            href="tel:+918460304001"
                            className="flex h-full w-full items-center justify-center rounded-full bg-orange-600  py-3 hover:scale-95"
                        >
                            <Text className="cursor-pointer bg-orange-600 text-center text-lg font-bold text-blue-900 ">
                                {'Call / WhatsApp '}
                                <Text className="cursor-pointer font-bold text-white">
                                    {'8460304001'}
                                </Text>
                            </Text>
                        </a>
                        <a
                            href="mailto:bhrugu1409@gmail.com"
                            className="flex h-full w-full items-center justify-center rounded-full bg-orange-600 py-3 hover:scale-95"
                        >
                            <Text className="cursor-pointer text-center text-lg font-bold text-blue-900">
                                {'Email me: '}
                                <Text className="cursor-pointer font-bold text-white">
                                    {'bhrugu1409@gmail.com'}
                                </Text>
                            </Text>
                        </a>
                    </div>
                </div>
                <div className="mt-5 pt-5">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js">
                        <Viewer fileUrl={CV} />
                    </Worker>
                </div>
            </div>
        </div>
    )
}

export default Contact
