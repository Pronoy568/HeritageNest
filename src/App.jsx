import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/shared/Navbar/Navbar";
import Footer from "./component/shared/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
