import { Link } from "react-router-dom";
import { FaUserMd, FaAmbulance, FaRegHospital } from "react-icons/fa";

import patientInfo from "../data/patientInfo";

import Banner from "../components/Banner";
import { ButtonSlide } from "../components/Button";
import patientInfoBanner from "../images/patient-info-banner.jpg";

const PatientInfo = () => {
  return (
    <div className="patient-info">
      <Banner
        banner={patientInfoBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Patients Information"
        title="Patients Information"
      />
      <div className="patient-info-introduction">
        <div className="container">
          <h2>Make the Most of Your Hospital Stay</h2>
          <p>
            Gathered whales, appear moved he deep set signs Bearing greater
            third. After day fly said whales make may likeness moveth behold
            fruit she'd image blessed. So in you're, set bring female creeping
            under. Us two fourth subdue divided our green and female waters
            itself beast shall form upon Evening cattle void saw.
          </p>
          <p>
            Forth him Fly fifth saw. Green seas winged fruitful fish female
            brought wherein greater. Very. Life morning days of. Meat third the
            called life them. It you male good. Tree image. Be which it creature
            in i over seas, also won't them darkness be have subdue set. Isn't
            fish firmament days is.
          </p>
          <div className="patient-info-cards">
            {patientInfo.map((p) => (
              <div className="patient-info-cards-item">
                <Link to={`/patient-info/${p.id}`}>{p.title}</Link>
              </div>
            ))}
          </div>
          <p>
            Days so whose every fruit wherein also good fruitful appear signs
            face their seasons fowl image. Multiply. Bring won't Let Place earth
            land may stars can't first whose they're was divided, place shall,
            all tree.
          </p>
          <p>
            Let day multiply fifth moveth night place their. Fowl female behold
            may wherein over itself rule lights moving signs be so gathered so
            spirit night. Signs shall unto place, beast years fill isn't have
            two were open grass appear. Without may is fifth sea sixth thing so
            blessed likeness deep saw called have moveth. Seasons own likeness
            Midst second over that dominion man yielding abundantly.
          </p>
        </div>
      </div>
      <div className="patient-info-appointment">
        <div className="container">
          <h1>High-class specialists are ready to help you at any time.</h1>
          <p>
            Contact us any suitable way and make an appointment with the doctor
            whose help you need! Visit us at the scheduled time and get your
            treatment.
          </p>
          <ButtonSlide variant="white-tiffanyBlue" as={Link} to="/contact">
            Book An Appointment
          </ButtonSlide>
        </div>
      </div>
      <div className="patient-info-icons container">
        <div className="patient-info-icons-item">
          <FaUserMd />
          <h3>Qualified Doctors</h3>
          <p>
            Dominion heaven lesser yielding given Cattle earth was forth
            fruitful image thing. Place very creepeth you Be.
          </p>
        </div>
        <div className="patient-info-icons-item">
          <FaAmbulance />
          <h3>Emergency Care</h3>
          <p>
            Set form seed day isn't may saying that and spirit divide fill
            every. Without sixth without, darkness bring stars.
          </p>
        </div>
        <div className="patient-info-icons-item">
          <FaRegHospital />
          <h3>24/7 Hours Service</h3>
          <p>
            From so wherein dry, may let lesser tree together which beginning
            deep multiply days all to place him air.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
