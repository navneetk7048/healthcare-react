const AppointmentForm = () => {
  return (
    <div className="home-appointment container">
      <div className="home-appointment-label">
        <h2>Make an appointment</h2>
        <hr />
        <p>A specialist will contact you shortly</p>
      </div>
      <form action="/" className="home-appointment-form" autoComplete="off">
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
        <button type="submit" className="btn">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
