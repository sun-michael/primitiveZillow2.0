import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import { createAction } from "./utils/reducer/reducer.utils";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component";
import Truck from "./routes/truck/truck.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     // console.log("UserProvider: user=", user);
  //     dispatch(setCurrentUser(user));
  //   });
  //   return unsubscribe;
  // }, []);
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          {/* <Route index={true} path="/" element={<Home />} /> */}
          <Route index={true} element={<Home />} />
          <Route path="truck" element={<Truck />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
