import { Outlet } from "react-router-dom";
import Aside from "./components/Aside.jsx";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  return (
    <>
      <Aside />
      <div className="main-content">
        <nav>
          <Navbar />
        </nav>
        <section style={{ scrollBehavior: "smooth" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default App;
