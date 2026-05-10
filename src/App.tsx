import RoutesConfig from "./routes";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#F7F9FA] min-h-screen">
      <Navbar />
      <RoutesConfig />
      <Footer />
    </div>
  );
};

export default App;