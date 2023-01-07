import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.vite'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
// import 'react-pdf/dist/esm/Page/TextLayer.css'
import CV from '../../assets/doc/Bhrugu_Resume.pdf'

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
}

function Contact() {
    useEffect(() => {}, [])

    const [file, setFile] = useState(CV)

    return (
        <div className="flex w-screen items-center justify-center">
            <div className="h-96 w-screen w-2/4 md:h-screen md:w-screen">
                <object
                    height={'100%'}
                    width={'100%'}
                    data={CV}
                    type="application/pdf"
                    itemType="pdf"
                ></object>
            </div>
        </div>
    )
}

export default Contact
