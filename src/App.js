import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AuthPage from "./Auth/Pages/AuthPage";
import PrivateRoutes from "./routing/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            {/* <Route path="logout" element={<Logout />} /> */}
            {/* {currentUser ? (
              <> */}
            <Route path="/*" element={<PrivateRoutes />} />
            {/* <Route index element={<Navigate to="/dashboards" />} /> */}
            {/* </>
            ) : (
              <> */}
            <Route path="auth/*" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/auth" />} />
            {/* </> */}
            {/* )} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
