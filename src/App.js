import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component";
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          {/* <Route index={true} path="/" element={<Home />} /> */}
          <Route index={true} element={<Home />} />
          <Route path="movers" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
