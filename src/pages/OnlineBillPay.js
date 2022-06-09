import { useState } from "react";
import { toast } from "react-toastify";
import Banner from "../components/Banner";
import { ButtonSlide } from "../components/Button";
import careerBanner from "../images/career-banner.jpg";

import {
  isRequired,
  isNumber,
  isValidAccount,
  isValidPhone,
} from "../validations";

const OnlineBillPay = () => {
  const [paymentData, setPaymentData] = useState({
    phone: "",
    account: "",
    amount: "",
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { phone, account, amount } = paymentData;

    try {
      isRequired(phone, "Phone number");
      isValidPhone(phone, "Phone number");

      isRequired(account, "Account number");
      isValidAccount(account, "Account number");

      isRequired(amount, "Amount");
      isNumber(amount, "Amount");
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();

    toast.success("Success");
  };

  return (
    <div className="online-bill-pay">
      <Banner
        previous={[{ text: "Home", link: "" }]}
        current="Online Bill Pay"
        title="Pay Your Bill Online"
        banner={careerBanner}
      />
      <div className="container">
        <h2>Make A Payment</h2>
        <p>
          Please fill out the information below to get started with your online
          payment. If you have any questions about your bill or the past due
          amount, please contact the Patient Financial Services office at{" "}
          <a href="tel:5612231234" className="payment-phone">
            (561) 223-1234
          </a>{" "}
          Monday through Friday from 8 a.m. to 5 p.m.
        </p>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div className="payment-form">
            <label htmlFor="phone">Please enter your mobile number</label>
            <input name="phone" id="phone" onChange={handleChange} />
            <label htmlFor="account">Please enter your account number</label>
            <input name="account" id="account" onChange={handleChange} />
            <label htmlFor="amount">Payment amount</label>
            <input
              name="amount"
              id="amount"
              onChange={(e) =>
                setPaymentData({
                  ...paymentData,
                  amount: e.target.value.replace(",", ""),
                })
              }
              value={
                paymentData.amount > 0
                  ? Number(paymentData.amount).toLocaleString()
                  : ""
              }
            />
          </div>
          <div className="payment-buttons">
            <ButtonSlide variant="tiffanyBlue-tartOrange">Continue</ButtonSlide>
            <ButtonSlide variant="pastelBlue-tiffanyBlue" type="reset">
              Reset
            </ButtonSlide>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnlineBillPay;
