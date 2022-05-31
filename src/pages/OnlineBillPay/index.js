import Banner from "../../components/Banner";
import Button from "../../components/Button";
import careerBanner from "../../assets/images/career-banner.jpg";

const OnlineBillPay = () => {
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
        <div className="payment-form">
          <label htmlFor="payment-number">
            Please enter your mobile number
          </label>
          <input type="text" name="payment-number" id="payment-number" />
          <label htmlFor="payment-account">
            Please enter your account number
          </label>
          <input type="text" name="payment-account" id="payment-account" />
          <label htmlFor="payment-amount">Payment amount</label>
          <input type="text" name="payment-amount" id="payment-amount" />
        </div>
        <div className="payment-buttons">
          <Button type="btn-blue-pink" text="Continue" />
          <Button type="btn-grey-blue" text="Reset" />
        </div>
      </div>
    </div>
  );
};

export default OnlineBillPay;
