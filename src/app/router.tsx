import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProjectsPage from '../pages/ProjectsPage'
import InsightsPage from '../pages/InsightsPage'
import ApplyPage from '../pages/ApplyPage'
import ContactPage from '../pages/ContactPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/insights', element: <InsightsPage /> },
      { path: '/apply', element: <ApplyPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
])
