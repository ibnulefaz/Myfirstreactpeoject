import "./App.css";
import Root from "./components/layout/Root";
import Navbar from "./components/shared/Navbar";
import HeroSection from "./components/pages/HeroSection";

function App() {
  return (
    <div>
      <Navbar />
      <Root />
      <HeroSection />
    </div>
  );
}

export default App;
