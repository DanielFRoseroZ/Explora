import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< Updated upstream
=======
import ErrorPage from './routes/ErrorPage.jsx'
import FlightsPage from './pages/Flights.jsx'
import FlightDetails from './pages/FlightDetails.jsx'
import Hotels from './pages/Hotels.jsx'
import HotelDetails from './pages/HotelDetails.jsx'

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
  }
])
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
