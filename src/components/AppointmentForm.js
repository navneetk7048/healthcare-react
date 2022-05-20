import "./AppointmentForm.css";

const AppointmentForm = () => {
  return (
    <div className="appointment container">
      <div className="appointment-label">
        <h2>Make an appointment</h2>
        <hr />
        <p>A specialist will contact you shortly</p>
      </div>
      <form action="#" className="appointment-form">
        <input type="text" name="name" id="name" placeholder="Your Name*" />
        <input type="email" name="email" id="email" placeholder="Your Email*" />
        <select name="service" id="service">
          <option value="null">Select Service</option>
          <option value="emergency-care">Emergency Care</option>
          <option value="neurology">Neurology</option>
          <option value="pediatry">Pediatry</option>
          <option value="cardiology">Cardiology</option>
          <option value="dentistry">Dentistry</option>
          <option value="orthopedics">Orthopedics</option>
          <option value="other">Other</option>
        </select>
        <input type="date" name="date" id="date" />
        <div></div>
        <input type="submit" value="Book Appointment" className="btn" />
      </form>
    </div>
  );
};

export default AppointmentForm;
