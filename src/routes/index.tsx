import { createBrowserRouter } from 'react-router-dom'

import MainContainer from '../container/MainContainer'
import ErrorPage from '../pages/Error'
import homePaths from './home'
import ContactPath from './contact'

export const router = createBrowserRouter([
    {
        element: <MainContainer />,
        errorElement: <ErrorPage />,
        path: '/',
        children: [homePaths],
    },
    {
        element: <MainContainer />,
        errorElement: <ErrorPage />,
        path: '/contact',
        children: [ContactPath],
    },
])
