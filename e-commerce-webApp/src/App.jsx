import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/auth/LoginForm";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/userpages/Home";
import UserAccount from "./pages/userpages/UserAccount";
import RegisterForm from "./pages/auth/RegisterForm";
import Userlayout from "./pages/userpages/Userl/userlayout/Userlayout";
import CheckAuth from "./checkauth/CheckAuth";

function App() {
  const isAuthenticated = true;
  const user = {
    name: "nirbhay",
    role: "user",
  };

  return (
    <Routes>
      {/* Authentication Pages */}
      <Route
        path="/"
        element={<CheckAuth isAuthenticated={isAuthenticated} user={user} />}
      ></Route>

      <Route path="/auth" element={<AuthPage />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>

      {/* User Pages */}
      <Route
        path="/user"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <Userlayout />
          </CheckAuth>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="account" element={<UserAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
