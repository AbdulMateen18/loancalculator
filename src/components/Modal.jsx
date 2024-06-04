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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>Monthly Payment: {monthlyPayment}</p>
        <p>Total Payment: {totalPayment}</p>
        <p>Total Interest: {totalInterest}</p>
      </div>
    </div>
  );
}

export default Modal;
