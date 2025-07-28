import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Text } from '../text'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback
            }

            return (
                <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
                    <div className="text-center">
                        <div className="mb-4 text-6xl">😵</div>
                        <Text className="mb-2 text-2xl text-slate-200">
                            Oops! Something went wrong
                        </Text>
                        <Text className="mb-4 text-slate-400">
                            We're sorry for the inconvenience. Please try refreshing the page.
                        </Text>
                        <button
                            onClick={() => window.location.reload()}
                            className="rounded bg-orange-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            Refresh Page
                        </button>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mt-4 text-left">
                                <summary className="cursor-pointer text-slate-400">
                                    Error Details (Development)
                                </summary>
                                <pre className="mt-2 overflow-auto rounded bg-slate-800 p-4 text-sm text-red-400">
                                    {this.state.error.stack}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
