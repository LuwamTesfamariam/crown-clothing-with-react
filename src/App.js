import { Route, Routes, Outlet } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/routes/home/home";
import Login from "./components/routes/login/login";

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
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
