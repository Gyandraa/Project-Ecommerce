import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto  py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Micastore</h1>

          <div className="hidden md:flex space-x-8 text-black font-semibold text-lg">
            <Link className="hover:text-teal-400 transition" to="/">
              Home
            </Link>
            <Link className="hover:text-teal-400 transition" to="/product">
              Product
            </Link>
            <Link className=" transition" to="/cart">
              🛒
            </Link>
          </div>
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        <div
          className={`md:hidden bg-black/60 backdrop-blur-sm text-white transition-all overflow-hidden ${
            open ? "max-h-40 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 font-semibold">
            <Link
              onClick={() => setOpen(false)}
              className="hover:text-teal-300 transition"
              to="/"
            >
              Home
            </Link>
            <Link
            onClick={() => setOpen(false)}
            className="hover:bg-teal-400 transition"
            to="/product">
              Product
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="hover:bg-teal-700/20 transition"
              to="/cart"
            >
              🛒
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
