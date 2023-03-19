import { createBrowserRouter } from 'react-router-dom'

import MainContainer from '../container/MainContainer'
import ErrorPage from '../pages/Error'
import Contact from '../pages/Contact'
import MainThread from '../container/mainStack'

export const router = createBrowserRouter([
    {
        element: <MainContainer />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainThread />,
            },
            { path: '/contact', element: <Contact /> },
        ],
    },
])
