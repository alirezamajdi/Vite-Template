// Keep all the routes of your project's pages in here and organize them by access rights
// Also use this routes in your components to redirect users to the right pages to avoid typos and mistakes

export const ROUTES = {
  auth: {
    auth: "/auth",
    login: "/auth/login",
    register: "/auth/register",
  },
  public: {
    home: "/",
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
  },
  private: {
    dashboard: "/dashboard",
    profile: "/dashboard/profile",
    changePassword: "/dashboard/profile/change-password",
    orders: "/dashboard/orders",
    order: "/dashboard/orders/[id]",
  },
  admin: {
    admin: "/admin",
    orders: "/admin/orders",
    order: "/admin/orders/[id]",
    transactions: "/admin/transactions",
    users: "/admin/users",
    user: "/admin/users/[id]",
  },
};
