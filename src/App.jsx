import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RootComponent from "./components/index.jsx";
import CardSection from "./components/card-section.jsx";
import RootForm from "./components/form/RootForm.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-center w-full">
        <div className="w-[100%] h-[776px] [background:linear-gradient(240deg,rgba(39,245,111),rgba(19,110,52)_100%)]">
          <Routes>
            <Route path="/" element={<RootComponent />} />
            <Route path="/contact" element={<RootForm />} />
          </Routes>
          <CardSection />
          {/* <Banner /> */}
        </div>
      </div>
    </>
  );
}

export default App;
