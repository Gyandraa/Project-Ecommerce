import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Router from "./router/router.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
