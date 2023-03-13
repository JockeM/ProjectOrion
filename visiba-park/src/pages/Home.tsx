import Mycalendar from "../components/myCalendar";
import visibaLogo from "../assets/visiba_logo.svg";
import "../App.css";
import supabase from "../database/supabase";
import { useUser } from "../components/UserUser";

//This logout button now works!
function LogoutBtn() {
  async function handleSignout() {
    await supabase.auth.signOut();
    window.location.reload();
  }
  return (
    <div className="authentication">
      <button className="signInButton" onClick={handleSignout}>
        Logout
      </button>
    </div>
  );
}

function LoginBtn() {
  return (
    <a href="/Signin">
      <button className="signInButton">Login</button>
    </a>
  );
}
//Need to useeffect something because we need to change button from logout to login
function AuthBtn() {
  const isLoggedIn = useUser;
  if (isLoggedIn()) {
    console.log(isLoggedIn);
    return <LogoutBtn />;
  }
  console.log(isLoggedIn);
  return <LoginBtn />;
}

function Home() {
  return (
    <div className="Home">
      <AuthBtn />
      <div className="logoTitle">
        <img src={visibaLogo} className="logo react" alt="React logo" />
      </div>
      <div className="card">
        <Mycalendar></Mycalendar>
      </div>
    </div>
  );
}

export default Home;
