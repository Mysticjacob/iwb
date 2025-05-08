import React from "react";

const faqs = [
  { question: "How can I recycle my electronics?", answer: "You can visit our Products page and follow the recycling process outlined." },
  { question: "How do I track my order?", answer: "Go to the Order Confirmation page and enter your order details." },
  { question: "Can I cancel my order?", answer: "Yes, contact support within 24 hours of placing your order." }
];

const FAQ = () => {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
