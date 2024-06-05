import React, { useState } from "react";
import Modal from "./Modal";

function FormComponent() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculatePayments = () => {
    const monthlyRate = interestRate / 100 / 12; // r
    const numberOfPayments = loanTerm * 12; // n
    const temp = Math.pow(1 + monthlyRate, numberOfPayments); // (1+r)^n
    const monthly = (loanAmount * monthlyRate * temp) / (temp - 1); // p*r*(1+r)^n / (1+r)^n-1
    if (isFinite(monthly)) {
      setMonthlyPayment(monthly.toFixed(2));
      setTotalPayment((monthly * numberOfPayments).toFixed(2));
      setTotalInterest((monthly * numberOfPayments - loanAmount).toFixed(2));
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Loan Payment Calculator
              </h1>
            </div>
            <div>
              <div className="mt-4">
                <label htmlFor="loan" className="font-semibold ml-1 ">
                  Loan Amount:
                  <input
                    id="loan"
                    type="number"
                    placeholder="Enter the Loan Amount"
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                  />
                </label>
              </div>
              <div className="mt-4">
                <label htmlFor="interest" className="font-semibold ml-1">
                  Interest Rate:
                  <input
                    id="interest"
                    type="number"
                    placeholder="Enter the Interest Rate"
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                  />
                </label>
              </div>
              <div className="mt-4">
                <label htmlFor="term" className="font-semibold ml-1">
                  Loan Term:
                  <input
                    id="term"
                    type="number"
                    placeholder="Enter the Loan Term (years)"
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                  />
                </label>
              </div>
              <div>
                <button
                  onClick={calculatePayments}
                  className="mt-8 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        monthlyPayment={monthlyPayment}
        totalPayment={totalPayment}
        totalInterest={totalInterest}
      />
      <div className={isModalOpen ? "overlay" : "hidden"}></div>
    </div>
  );
}

export default FormComponent;
