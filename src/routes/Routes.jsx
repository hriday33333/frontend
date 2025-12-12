import { createBrowserRouter } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';
import MainLayout from '../layouts/MainLayout';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';
import Profile from '../pages/Dashboard/Common/Profile';
import Statistics from '../pages/Dashboard/Common/Statistics';
import MyOrders from '../pages/Dashboard/Customer/MyOrders';
import AddTuition from '../pages/Dashboard/Seller/AddTuition';
import ManageOrders from '../pages/Dashboard/Seller/ManageOrders';
import MyInventory from '../pages/Dashboard/Seller/MyInventory';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

import TuitionDetails from '../pages/TuitionDetails/TuitionDetails';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tuitions/:id',
        element: <TuitionDetails></TuitionDetails>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-Tuitions',
        element: (
          <PrivateRoute>
            <AddTuition />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-inventory',
        element: (
          <PrivateRoute>
            <MyInventory />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-orders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-orders',
        element: <ManageOrders />,
      },
    ],
  },
]);
