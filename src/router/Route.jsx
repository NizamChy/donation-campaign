import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import Donation from '../pages/donation/Donation';
import Statistics from '../pages/statistics/Statistics';
import ErrorPage from '../pages/errorPage/ErrorPage';
import CardDetails from '../pages/cardDetails/CardDetails';

const myCreatedRoute =createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('./data.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/cards/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('./data.json')
      }
    ]
  }
])

export default myCreatedRoute;