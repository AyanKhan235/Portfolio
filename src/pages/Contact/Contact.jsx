const Contact = () => {
  return (
    <section className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116078.16871957199!2d73.62246907453894!3d24.608419846815234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1715922952115!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="form-input"
              placeholder=" Enter Your Full Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="Enter Your Email"
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="your messages"
          ></textarea>
          <button className="form-btn" type="submit">
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
