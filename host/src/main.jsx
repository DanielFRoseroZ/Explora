import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import ErrorPage from './routes/ErrorPage.jsx'
import FlightsPage from './pages/Flights.jsx'
import FlightDetails from './pages/FlightDetails.jsx'
import Hotels from './pages/Hotels.jsx'
import HotelDetails from './pages/HotelDetails.jsx'
import Restaurants from './pages/Restaurants.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/flights',
    element: <FlightsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/flights/:id',
    element: <FlightDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/hotels',
    element: <Hotels />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/hotel/:id',
    element: <HotelDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/restaurants',
    element: <Restaurants />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
