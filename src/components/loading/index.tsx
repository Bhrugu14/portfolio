import React from 'react'

interface LoadingProps {
    size?: 'sm' | 'md' | 'lg'
    color?: string
}

export const Loading = ({ size = 'md', color = 'text-orange-600' }: LoadingProps) => {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12'
    }

    return (
        <div className="flex items-center justify-center">
            <div
                className={`${sizeClasses[size]} ${color} animate-spin rounded-full border-2 border-current border-t-transparent`}
                role="status"
                aria-label="Loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export const PageLoading = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
            <div className="text-center">
                <Loading size="lg" />
                <p className="mt-4 text-lg text-slate-400">Loading...</p>
            </div>
        </div>
    )
}
