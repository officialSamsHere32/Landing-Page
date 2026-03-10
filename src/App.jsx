import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RootComponent from "./components/index.jsx";
import CardSection from "./components/card-section.jsx";
import RootForm from "./components/form/RootForm.jsx";
import History from "./components/History.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./components/portfolio.jsx";
import GridLayout from "./components/GridLayout.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<RootComponent />} />
          <Route path="/contact" element={<RootForm />} />
          <Route path="/GridLayout" element={<GridLayout />} />
        </Routes>
        <CardSection />
        <History />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
