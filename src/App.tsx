// import Sidebar from "./Component/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import AddProduct from "./Page/AddProduct";
import Product from "./Page/Product";
import Setting from "./Page/Setting";
import SingleProduct from "./Page/SingleProduct";
import Profile from "./Page/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/products/:id" element={<SingleProduct />}></Route>
          <Route path="/settings" element={<Setting />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
