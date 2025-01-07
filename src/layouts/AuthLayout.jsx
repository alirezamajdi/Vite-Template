import logo from "/public/images/gaply.png";
import MainLayout from "./MainLayout";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <MainLayout>
      <div className="container relative flex grow flex-col">
        <div className="grid grow grid-cols-1 items-center lg:grid-cols-3">
          <Outlet />
          <img
            src={logo}
            alt="logo"
            width={300}
            className="mx-auto max-w-[80%] lg:col-span-2"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default AuthLayout;
