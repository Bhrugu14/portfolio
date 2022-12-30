import React from 'react'

interface TextProps {
    children: any
    className?: string
    onMouseLeave?: (i: any) => void
    onMouseDown?: (i: any) => void
    onMouseEnter?: (i: any) => void
    onMouseUp?: (i: any) => void
}

export const Text = ({
    children,
    className,
    onMouseLeave,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
}: TextProps) => {
    return (
        <label
            onMouseLeave={onMouseLeave}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseUp={onMouseUp}
            className={`font-poppins ${className}`}
        >
            {children}
        </label>
    )
}
