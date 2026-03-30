import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RootComponent from "./components/index.jsx";
// import RootComponent from "./Latihan2/components/index.js";
// import PriceHold from "./Latihan2/components/Price.js";
// import Class from "./Latihan2/components/Class.js";
// import Testimoni from "./Latihan2/components/Testimoni.jsx";
// import Footer from "./Latihan2/components/Footer.js";
import CardSection from "./components/card-section.jsx";
import RootForm from "./components/form/RootForm.jsx";
import History from "./components/History.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./components/portfolio.jsx";
import GridLayout from "./components/GridLayout.jsx";
import Skills from "./components/skills.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootComponent />} />
            <Route path="/" element={<RootForm />} />
          </Routes>
        </BrowserRouter>
        {/* <PriceHold />
        <Class />
        <Testimoni /> */}
        <CardSection />
        <History />
        <GridLayout />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
