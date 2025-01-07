import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ROUTES } from "src/constants/routes";

// Lazy loading
const Index = lazy(() => import("src/pages/index"));
const Login = lazy(() => import("src/pages/auth/login"));
const Register = lazy(() => import("src/pages/auth/register"));
const AuthLayout = lazy(() => import("src/layouts/AuthLayout"));
const About = lazy(() => import("src/pages/about"));

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("token"); // or your auth check logic

//   if (!isAuthenticated) {
//     return <Navigate to={ROUTES.auth.login} replace />;
//   }

//   return children;
// };

// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: ROUTES.public.home,
        element: <Index />,
      },
      {
        path: ROUTES.auth.auth,
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.auth.login,
            element: <Login />,
          },
          {
            path: ROUTES.auth.register,
            element: <Register />,
          },
        ],
      },
      {
        path: ROUTES.public.aboutUs,
        element: <About />,
      },
    ],
  },
]);
