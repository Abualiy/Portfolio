import Register from "./pages/Register";
import Login from "./pages/Login"
import Home from "./pages/Home"
import SplashScreen from "./pages/SplashScreen";
import Forgot from "./pages/Forgot";
import ForgetMessage from "./pages/ForgetMessage";
import "./style.scss"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="SplashScreen" element={<SplashScreen />} />
          <Route path="reset" element={<Forgot />} />
          <Route path="alert" element={<ForgetMessage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
