import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import ThankYou from "./routes/ThankYou";
import LiveStock from "./routes/LiveStock";
import AboutUs from "./routes/AboutUs";
import Footer from "./components/Footer";
import LivestockList from "./components/LivestockList";
import {LivestockProvider} from './context/LivestockContext'

function App() {
  return (
    <div className="App">
      <LivestockProvider>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<>
            <Home />
            <LivestockList/>
          </>
        }/>
          <Route path="/LiveStock" element={<LiveStock />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ThankYou" element={<ThankYou />} />
        </Routes>
        <Footer />
      </LivestockProvider>  
    </div>
  );
}

export default App;
