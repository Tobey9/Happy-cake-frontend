import "./App.css";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Main } from "./pages/Main";
import { Menu } from "./pages/Menu";
import { Review } from "./pages/Review";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Menu />
      <Review />
      <AboutUs />
      <Contact />
    </>
  );
}

export default App;
