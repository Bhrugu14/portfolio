import React from 'react'

interface TextProps {
    children: any
    css?: string
}

export const Text = ({ children, css }: TextProps) => {
    return (
        <label className={`text-slate-800 dark:text-slate-50 ${css}`}>
            {children}
        </label>
    )
}
