import React from "react";
import AppRoutes from "./AppRoutes";
import AuthContext from "./context/AuthContext";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AppRoutes />;
    </AuthContext.Provider>
  );
}

export default App;
