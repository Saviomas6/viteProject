import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { googleLogout } from "@react-oauth/google";

const GoogleLoginButton = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [profile, setProfile] = useState<any>([]);

  const handleOnSuccess = (res: any) => {
    localStorage.setItem("token", res?.access_token);
    setLoggedIn(true);
  };

  const handleOnError = (error: any) => {
    console.log("Login Failed:", error);
  };

  const handleLogin = useGoogleLogin({
    onSuccess: handleOnSuccess,
    onError: handleOnError,
  });

  const handleLoginData = async () => {
    const tokenData = localStorage.getItem("token");
    console.log("tokenData", tokenData);
    try {
      if (tokenData) {
        const result = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenData}`,
          {
            headers: {
              Authorization: `Bearer ${tokenData}`,
              Accept: "application/json",
            },
          }
        );
        setLoggedIn(true);
        setProfile(result?.data);
        console.log(result?.data, "resultresult");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleLoginData();
  }, [isLoggedIn]);

  const handleLogout = () => {
    googleLogout();
    setProfile(null);
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {isLoggedIn && profile?.length !== 0 ? (
        <div style={{ color: "#fff" }}>
          <img
            src={profile?.picture}
            alt="user image"
            style={{ height: "50px", width: "50px", borderRadius: "50px" }}
          />
          <h3>User Logged in</h3>
          <p>Name: {profile?.name}</p>
          <p>Email Address: {profile?.email}</p>
          <br />
          <br />
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <button onClick={() => handleLogin()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
};

export default GoogleLoginButton;
