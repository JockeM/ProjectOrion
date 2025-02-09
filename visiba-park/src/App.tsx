import { Route, Routes } from "react-router-dom";
import { useUser } from "./components/UserUser";
import Home from "./pages/Home";
import Signin from "./pages/Sign_in";

function App() {
  const [user, logout] = useUser();

  return (
    <Routes>
      <Route element={<Home user={user} logout={logout} />} path="/" />

      <Route element={<Signin />} path="/Signin" />
    </Routes>
  );
}

export default App;
