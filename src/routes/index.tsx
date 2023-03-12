import { createBrowserRouter } from 'react-router-dom'

import MainContainer from '../container/MainContainer'
import ErrorPage from '../pages/Error'
import Contact from '../pages/Contact'
import MainThread from '../container/mainStack'

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainContainer>
                <MainThread />
            </MainContainer>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/contact',
        element: (
            <MainContainer>
                <Contact />
            </MainContainer>
        ),
        errorElement: <ErrorPage />,
    },
])
