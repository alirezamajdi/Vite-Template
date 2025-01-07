import { useLocation, useNavigate } from "react-router-dom";

export function useRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  return {
    pathname: location.pathname,
    replace: (path) => navigate(path, { replace: true }),
    isReady: true, // React Router doesn't have this, but you can use it for compatibility
  };
}
