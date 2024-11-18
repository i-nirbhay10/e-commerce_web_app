import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/auth/LoginForm";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/userpages/Home";
import UserAccount from "./pages/userpages/UserAccount";
import RegisterForm from "./pages/auth/RegisterForm";

function App() {
  return (
    <>
      <Routes>
        {/* Authentication Pages */}
        <Route path="/" element={<AuthPage />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>

        {/* User Pages */}
        <Route path="/home" element={<Home />}>
          <Route path="account" element={<UserAccount />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
