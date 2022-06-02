import { FaPaperclip } from "react-icons/fa";

import Banner from "../../components/Banner";
import Button from "../../components/Button";
import careerBanner from "../../assets/images/career-banner.jpg";

const CareerDetail = () => {
  return (
    <div className="career-detail">
      <Banner
        banner={careerBanner}
        previous={[
          { text: "Home", link: "" },
          { text: "Career", link: "career" },
        ]}
        current="Technical Ambassador"
      />
      <div className="career-detail-content container">
        <div className="career-detail-info">
          <div>
            <h1>Technical Ambassador</h1>
            <p>
              Product | <em>New York, NY, United States</em>
            </p>
          </div>
          <div>
            <h2>About The Role:</h2>
            <p>
              Multiply over him is fruit fish third is replenish is set he one.
              Herb appear light seas seas which meat our. You good living
              yielding stars grass us female may which first moving made of you
              land, heaven. Said moveth. Have dominion. He itself morning sea
              tree earth kind said in behold moved, fifth called. Lesser image.
            </p>
          </div>
          <div>
            <h2>Responsibilities Include:</h2>
            <ul>
              <li>
                Give had it so it lights for moveth created open dry given years
                divided made good make fill behold.
              </li>
              <li>
                Moving tree moveth their give life have living don't second
                beast don't days seasons sixth given two.
              </li>
              <li>
                Seed one unto years life i beast divided, wherein rass moved
                light.
              </li>
              <li>
                Them open, dominion days place of called place together midst
                given lesser called without two greater the whose blessed.
              </li>
              <li>
                Night face moved don't divided lights also isn't. Were, she'd
                upon shall deep fowl their, grass moved light let of fifth one
                fowl
              </li>
            </ul>
          </div>
          <div>
            <h2>Qualifications</h2>
            <ul>
              <li>
                Give had it so it lights for moveth created open dry given years
                divided made good make fill behold.
              </li>
              <li>
                Moving tree moveth their give life have living don't second
                beast don't days seasons sixth given two.
              </li>
              <li>
                Seed one unto years life i beast divided, wherein rass moved
                light.
              </li>
              <li>
                Them open, dominion days place of called place together midst
                given lesser called without two greater the whose blessed.
              </li>
              <li>
                Night face moved don't divided lights also isn't. Were, she'd
                upon shall deep fowl their, grass moved light let of fifth one
                fowl
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="career-detail-form">
            <h2>Apply to Job</h2>
            <label htmlFor="career-first-name">First Name*</label>
            <input
              type="text"
              name="career-first-name"
              id="career-first-name"
            />
            <label htmlFor="career-last-name">Last Name*</label>
            <input type="text" name="career-last-name" id="career-last-name" />
            <label htmlFor="career-email">Email*</label>
            <input type="text" name="career-email" id="career-email" />
            <label htmlFor="career-contact">Contact Number*</label>
            <input type="text" name="career-contact" id="career-contact" />
            <div className="career-file-inputs">
              <div className="career-file-input">
                <p>Resume</p>
                <div>
                  <p>
                    <FaPaperclip /> ATTACH
                  </p>
                </div>
              </div>
              <div className="career-file-input">
                <p>Cover letter</p>
                <div>
                  <p>
                    <FaPaperclip /> ATTACH
                  </p>
                </div>
              </div>
            </div>
            <Button type="btn-white-blue" text="Submit Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;