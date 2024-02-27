// import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import AccountProvider from "./components/context/AccountProvider";

function App() {
  const clientId =
    "1010178196127-5jt0hd563chq5jm29lqf7gkdhu9fga5e.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
