import dollarSign from "../assets/icon-dollar.svg";
import person from "../assets/icon-person.svg";

function TipCalculatorInputs({
  billAmount,
  setBillAmount,
  tipPercentage,
  setTipPercentage,
  people,
  setPeople,
}) {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="flex flex-col gap-6 md:w-1/2 md:p-5">
      {/* Bill Amount Input */}
      <label>
        <div className="flex items-center justify-between">
          <span className="text-sm md:text-base font-semibold text-grey-500">
            Bill
          </span>

          {/* Show error if bill amount is zero */}
          {billAmount === "0" && (
            <span className="text-sm font-semibold text-orange-400">
              Can't be zero
            </span>
          )}
        </div>

        <div
          className={`form-input ${
            billAmount === "0" && "border-2 border-orange-400"
          }`}
        >
          <img src={dollarSign} alt="Dollar sign" />
          <input
            type="text"
            inputMode="numeric"
            placeholder="0"
            value={billAmount}
            onChange={(e) => {
              let value = e.target.value;

              // Allow only digits and a single decimal point
              if (!/^\d*\.?\d*$/.test(value)) return;

              // Limit digits after decimal point to 2
              const parts = value.split(".");
              if (parts.length === 2 && parts[1].length > 2) return;

              // Remove unnecessary leading zeros
              value = value.replace(/^0+(?=\d)/, "");

              const parsed = parseFloat(value);

              // Restrict bill amount between 0 and 10,000
              if (value === "") {
                setBillAmount("");
              } else if (isNaN(parsed) || parsed < 0) {
                setBillAmount("0");
              } else if (parsed > 10000) {
                setBillAmount("10000");
              } else {
                setBillAmount(value);
              }
            }}
          />
        </div>
      </label>

      {/* Tip Percentage Selection */}
      <div>
        <p className="mb-2 text-sm md:text-base font-semibold text-grey-500">
          Select Tip %
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-6 md:gap-3 px-2 md:px-0 ">
          {tipOptions.map((tipOption) => (
            <button
              key={tipOption}
              value={tipOption}
              onClick={(e) => setTipPercentage(e.target.value)}
              className={`md:text-lg font-semibold rounded-md transition-colors duration-300 ease-in-out cursor-pointer
                ${
                  tipPercentage === tipOption.toString()
                    ? "bg-green-400 text-green-800"
                    : "bg-green-800 text-white hover:text-green-800 hover:bg-green-300"
                }`}
            >
              {tipOption}%
            </button>
          ))}

          {/* Custom tip input */}
          <input
            type="text"
            inputMode="numeric"
            placeholder="Custom"
            value={tipPercentage}
            onChange={(e) => {
              let value = e.target.value;

              // Allow only digits and one optional decimal point
              if (!/^\d*\.?\d*$/.test(value)) return;

              // Limit digits after decimal point to 2
              const parts = value.split(".");
              if (parts.length === 2 && parts[1].length > 2) return;

              // Remove unnecessary leading zeros
              value = value.replace(/^0+(?=\d)/, "");

              const parsed = parseFloat(value);

              // Restrict tip percentage between 0 and 100
              if (value === "") {
                setTipPercentage("");
              } else if (isNaN(parsed) || parsed < 0) {
                setTipPercentage("0");
              } else if (parsed > 100) {
                setTipPercentage("100");
              } else {
                setTipPercentage(value);
              }
            }}
            className="form-input font-semibold"
          />
        </div>
      </div>

      {/* Number of People Input */}
      <label>
        <div className="flex items-center justify-between">
          <span className="text-sm md:text-base font-semibold text-grey-500">
            Number of People
          </span>

          {/* Show error if people count is zero */}
          {people === "0" && (
            <span className="text-sm font-semibold text-orange-400">
              Can't be zero
            </span>
          )}
        </div>

        <div
          className={`form-input ${
            people === "0" && "border-2 border-orange-400"
          }`}
        >
          <img src={person} alt="Person" />
          <input
            type="text"
            inputMode="numeric"
            value={people}
            placeholder="0"
            onChange={(e) => {
              let value = e.target.value;

              // Only allow digits (no e, +, -, .)
              if (!/^\d*$/.test(value)) return;

              // Remove unnecessary leading zeros
              value = value.replace(/^0+(?=\d)/, "");

              const parsed = parseInt(value, 10);

              // Restrict people count between 0 and 100
              if (value === "") {
                setPeople("");
              } else if (isNaN(parsed) || parsed < 0) {
                setPeople("0");
              } else if (parsed > 100) {
                setPeople("100");
              } else {
                setPeople(value);
              }
            }}
          />
        </div>
      </label>
    </div>
  );
}

export default TipCalculatorInputs;
