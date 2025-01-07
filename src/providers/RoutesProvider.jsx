import { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { ROUTES } from "src/constants/routes";

//import pages
import Index from "src/pages/index";
import About from "src/pages/about";
import AuthLayout from "src/layouts/AuthLayout";
import Login from "src/pages/auth/login";
import Register from "src/pages/auth/register";
import Dashboard from "src/pages/dashboard/index";

const RoutesProvider = () => {
  return (
    <Suspense fallback={<q>Loading...</q>}>
      <Routes>
        {/* Root Layout */}
        <Route path="/" element={<Outlet />}>
          {/* Public Routes */}
          <Route path={ROUTES.public.home} element={<Index />} />
          <Route path={ROUTES.public.aboutUs} element={<About />} />
          <Route path={ROUTES.private.dashboard} element={<Dashboard />} />

          {/* Auth Routes */}
          <Route path={ROUTES.auth.auth} element={<AuthLayout title="Auth" />}>
            <Route path={ROUTES.auth.login} element={<Login />} />
            <Route path={ROUTES.auth.register} element={<Register />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesProvider;
