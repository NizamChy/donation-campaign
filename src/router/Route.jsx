import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import Donation from '../pages/donation/Donation';
import Statistics from '../pages/statistics/Statistics';

const myCreatedRoute =createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  }
])

export default myCreatedRoute;