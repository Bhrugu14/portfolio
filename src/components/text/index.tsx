import React from 'react'

interface TextProps {
    children: any
    className?: string
}

export const Text = ({ children, className }: TextProps) => {
    return (
        <label className={`text-slate-800 dark:text-slate-50 ${className}`}>
            {children}
        </label>
    )
}
