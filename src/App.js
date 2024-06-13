import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const Hello = () => {
  return <h1>Hello</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route index={true} path="/" element={<Home />} /> */}
        <Route index={true} element={<Home />} />
        <Route path="movers" element={<Hello />} />
      </Route>
    </Routes>
  );
};

export default App;
