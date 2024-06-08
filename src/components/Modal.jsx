function Modal({
  isOpen,
  onClose,
  monthlyPayment,
  totalPayment,
  totalInterest,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70vw] bg-white rounded shadow-xl z-10">
      <span
        className="absolute right-[0.1rem] text-[2.5rem] text-grey-800 cursor-pointer border-none bg-none"
        onClick={onClose}
      >
        &times;
      </span>
      <div>
        <div className="p-6">
          <h3 className="font-semibold">
            Here are your Loan Payment Details :{" "}
          </h3>
          <div className="p-2">
            <p>{`You will need to pay ${monthlyPayment}$ each month.`}</p>
            <p>{`Total amount that will be payed over loan life is ${totalPayment}$ .`}</p>
            <p>{`Total Interest: ${totalInterest}$`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
