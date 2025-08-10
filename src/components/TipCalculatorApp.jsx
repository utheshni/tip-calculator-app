import { useState } from "react";
import TipCalculatorInputs from "./TipCalculatorInputs";
import TipCalculatorResults from "./TipCalculatorResults";
import logo from "../assets/logo.svg";

function TipCalculatorApp() {
  // State variables for input values
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [people, setPeople] = useState("");

  // Resets all input fields to empty
  const handleReset = () => {
    setBillAmount("");
    setTipPercentage("");
    setPeople("");
  };

  return (
    <div className="flex flex-col items-center md:justify-center gap-y-6 min-h-screen bg-green-200">
      <header className="mt-8">
        <img src={logo} alt="Logo" className="w-16 h-auto mx-auto" />
      </header>
      <main
        className="md:flex md:items-stretch md:justify-center md:gap-4 w-full md:max-w-[700px] lg:max-w-[900px] h-full md:mx-auto px-6 py-4 bg-white 
        rounded-t-2xl md:rounded-2xl shadow-lg"
      >
        <TipCalculatorInputs
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
          people={people}
          setPeople={setPeople}
        />
        <TipCalculatorResults
          billAmount={billAmount}
          tipPercentage={tipPercentage}
          people={people}
          onReset={handleReset}
        />
      </main>
    </div>
  );
}

export default TipCalculatorApp;
