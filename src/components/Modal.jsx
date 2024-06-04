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
      <div className="relative">
        <span
          className="absolute top-[1.2rem] right-[2rem] text-[2rem] text-grey-800 cursor-pointer border-none bg-none"
          onClick={onClose}
        >
          &times;
        </span>
        <p>{`Monthly Payment: ${monthlyPayment}$`}</p>
        <p>{`Total Payment: ${totalPayment}$`}</p>
        <p>{`Total Interest: ${totalInterest}$`}</p>
      </div>
    </div>
  );
}

export default Modal;
