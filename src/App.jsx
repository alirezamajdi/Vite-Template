import ErrorBoundary from "src/layouts/ErrorBoundry";
import Web3Provider from "src/providers/Web3Provider";
import RoutesProvider from "src/providers/RoutesProvider";
import { CustomStatesProvider } from "src/contexts/CustomStatesContext";
import { AuthProvider } from "src/contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import store from "src/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import "./styles/main.scss";

function App() {
  return (
    <ReduxProvider store={store}>
      <Web3Provider>
        <AuthProvider>
          <CustomStatesProvider>
            <ErrorBoundary>
              <RoutesProvider />
              <ToastContainer
                position={"top-left"}
                pauseOnFocusLoss={false}
                rtl={false}
              />
            </ErrorBoundary>
          </CustomStatesProvider>
        </AuthProvider>
      </Web3Provider>
    </ReduxProvider>
  );
}

export default App;

// <ReduxProvider store={store}>
//   {/* <Web3Provider> */}
//   <AuthProvider>
//     <CustomStatesProvider>
//       <ErrorBoundary>
//         <Suspense fallback={<q>Loading...</q>}>
//           <RouterProvider router={router} />
//         </Suspense>
//         <ToastContainer
//           position={"top-left"}
//           pauseOnFocusLoss={false}
//           rtl={false}
//         />
//       </ErrorBoundary>
//     </CustomStatesProvider>
//   </AuthProvider>
//   {/* </Web3Provider> */}
// </ReduxProvider>;
