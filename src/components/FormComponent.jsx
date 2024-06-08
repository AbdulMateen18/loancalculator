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

  const clearInputs = () => {
    setLoanAmount(0);
    setInterestRate(0);
    setLoanTerm(0);
    setMonthlyPayment(0);
    setTotalPayment(0);
    setTotalInterest(0);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    clearInputs();
  };

  const calculatePayments = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const r = annualRate / 12;
    const n = parseFloat(loanTerm) * 12;
    const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    if (isFinite(M)) {
      setMonthlyPayment(M.toFixed(2));
      setTotalPayment((M * n).toFixed(2));
      setTotalInterest((M * n - P).toFixed(2));
      setIsModalOpen(true);
    } else {
      setMonthlyPayment("Invalid Input");
      setTotalPayment("Invalid Input");
      setTotalInterest("Invalid Input");
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
                    placeholder="Enter the Loan Amount ($)"
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                  />
                </label>
              </div>
              <div className="mt-4">
                <label htmlFor="interest" className="font-semibold ml-1">
                  Interest Rate (%):
                  <input
                    id="interest"
                    type="number"
                    placeholder="Enter the annual Interest Rate"
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                  />
                  {/* This will be in percentage, will have to divide it by 100 */}
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
        onClose={handleClose}
        monthlyPayment={monthlyPayment}
        totalPayment={totalPayment}
        totalInterest={totalInterest}
      />
      <div className={isModalOpen ? "overlay" : "hidden"}></div>
    </div>
  );
}

export default FormComponent;
