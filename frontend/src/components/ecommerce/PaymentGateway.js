import axios from "axios";

const PaymentGateway = ({ amount, onPaymentSuccess }) => {
  const handlePayment = async () => {
    try {
      const response = await axios.post("https://iwb-2213.vercel.app/api/payments", { amount });
      if (response.data.success) {
        onPaymentSuccess();
      }
    } catch (error) {
      alert("Payment failed!");
    }
  };

  return (
    <div>
      <h2>Payment Gateway</h2>
      <p>Total Amount: ${amount}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentGateway;
