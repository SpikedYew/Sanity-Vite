import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Comp/Menu";

// Importuj swoje komponenty
import Home from "./Home";
import About from "./polityka-prywatnosci";
import Error from "./Error";
// import Blog from "./Blog";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/polityka-prywatnosci" element={<About />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Error />} />

            {/* <Route path="/blog" element={<Blog />} /> */}
          </Routes>
        </div>
        <footer
          id="kontakt"
          className="bg-gray-50 min-w-full border-gray-100 border-t"
        >
          <div className="container flex justify-center">
            <div className="flex flex-col items-center py-28 lg:flex-row lg:w-[70%]">
              <h6 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
                Strony www dla firm.
              </h6>
              <div className="flex flex-col gap-3 items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
                <a
                  aria-label="Zadzwoń do mnie"
                  href="tel:+48533320515"
                  className="rounded-full flex gap-2 items-center bg-black hover:bg-red-500 focus:bg-cyan-500 py-3 px-6 text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +48 533 320 515
                </a>
                <span className="mx-3 hover:underline">
                  <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
