import { Routes, Route } from "react-router-dom";
import Signin from "./pages/auth/Signin";
import LoginForm from "./pages/auth/LoginForm";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/userpages/Home";
import UserAcount from "./pages/userpages/UserAcount";
{
  /* <AuthPage /> */
}
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />}>
          <Route path="/acount" element={<UserAcount />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
