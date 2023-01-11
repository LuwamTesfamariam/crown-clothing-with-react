import { Route, Routes, Outlet } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/routes/home/home";
import Authentication from "./components/routes/authentication/authentication";

const Shop = () => {
  return (
    <div>
      <h1>
        I am the shop page!
      </h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
