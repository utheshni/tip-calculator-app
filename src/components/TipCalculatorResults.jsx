function TipCalculatorResults({ billAmount, tipPercentage, people, onReset }) {
  // Parse input values to numbers for calculation
  const bill = parseFloat(billAmount);
  const tip = parseFloat(tipPercentage);
  const numPeople = parseInt(people);

  // Disable reset button if inputs are invalid or empty
  const isDisabled =
    !billAmount ||
    !tipPercentage ||
    !people ||
    bill <= 0 ||
    tip < 0 ||
    numPeople <= 0;

  // Calculate tip amount per person and formatted to 2 decimals
  const tipAmount =
    bill > 0 && tip >= 0 && numPeople > 0
      ? ((bill * (tip / 100)) / numPeople).toFixed(2)
      : "0.00";

  // Calculate total amount per person (bill + tip) and formatted to 2 decimals
  const totalAmount =
    bill > 0 && tip >= 0 && numPeople > 0
      ? (bill / numPeople + parseFloat(tipAmount)).toFixed(2)
      : "0.00";
  console.log(typeof tipAmount);

  return (
    <section className="flex flex-col justify-between gap-6 md:w-1/2 mt-6 md:m-4 px-4 py-6 md:p-10 bg-green-800 rounded-xl">
      <div className="flex flex-col justify-between gap-6">
        <div className="amount-row">
          <div>
            <p className="amount-label">Tip Amount</p>
            <p className="amount-sublabel">/ person</p>
          </div>
          <p className="amount-value">${tipAmount}</p>
        </div>
        <div className="amount-row">
          <div>
            <p className="amount-label">Total</p>
            <p className="amount-sublabel">/ person</p>
          </div>
          <p className="amount-value">${totalAmount}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onReset}
        disabled={isDisabled}
        className={`w-full p-2 text-xl font-semibold rounded-md
          ${
            isDisabled
              ? "bg-green-400 text-green-800 opacity-20 cursor-not-allowed"
              : "bg-green-400 text-green-800 transition-colors duration-300 ease-in-out hover:bg-green-300 cursor-pointer"
          }
        `}
      >
        RESET
      </button>
    </section>
  );
}

export default TipCalculatorResults;
