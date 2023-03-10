import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App/App";

function Logout() {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const LogoutPage = async () => {
    try {
      const response = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      dispatch({ type: "user", payload: false });

      if (!response.status === 200 || !data) {
        const err = new Error(response.error);
        throw err;
      }
      window.alert("user log out successfully");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    LogoutPage();
  }, []);

  return <div>Logout Successfully</div>;
}

export default Logout;
