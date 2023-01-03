import React from "react";
import AppRoutes from "./AppRoutes";
import AuthContext from "./context/AuthContext";

function App() {
  const [user, setUser] = React.useState(null);
  const [wishlist, setWishlist] = React.useState({});

  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const storageWishlist = localStorage.getItem("wishlist");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    if (storageWishlist) {
      const foundWishlist = JSON.parse(storageWishlist);
      setWishlist(foundWishlist);
    }
  }, []);

  const customSetWishlist = (newWishlist) => {
    if (user?.email) {
      const userWishlist = { ...wishlist, [user?.email]: newWishlist };
      localStorage.setItem("wishlist", JSON.stringify(userWishlist));
      setWishlist(userWishlist);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        wishlist: wishlist[user?.email] ?? [],
        customSetWishlist,
      }}
    >
      <AppRoutes />
    </AuthContext.Provider>
  );
}

export default App;
