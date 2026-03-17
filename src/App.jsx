import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RootComponent from "./components/index.jsx";
import PriceHold from "./components/Price.jsx";
import Class from "./components/Class.jsx";
// import CardSection from "./components/card-section.jsx";
// import RootForm from "./components/form/RootForm.jsx";
// import History from "./components/History.jsx";
// import Footer from "./components/Footer.jsx";
// import Portfolio from "./components/portfolio.jsx";
// import GridLayout from "./components/GridLayout.jsx";
// import Skills from "./components/skills.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<RootComponent />} />
        </Routes>
        <PriceHold />
        <Class />
        {/* <CardSection />
        <History />
        <Skills />
        <Portfolio />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
