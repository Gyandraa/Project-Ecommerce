import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Router from "./router/router.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}
