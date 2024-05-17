import { useState, useEffect } from "react";
const serviceData = [
  {
    title: "Web design",
    icon: "/images/icon-design.svg",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    title: "Web development",
    icon: "/images/icon-dev.svg",
    description: "High-quality development of sites at the professional level.",
  },
  {
    title: "Mobile apps",
    icon: "/images/icon-app.svg",
    description:
      "Professional development of applications for iOS and Android.",
  },
  {
    title: "Photography",
    icon: "/images/icon-photo.svg",
    description:
      "I make high-quality photos of any category at a professional level.",
  },
];

import Service from "./Service.jsx";
import Testimonials from "./Testimonials.jsx";
const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  return (
    <div className="about">
      <header>
        <h2 className="h2 article-title">About Me </h2>
      </header>
      <section className="about-text">
        <p>
          I'm Creative UI/UX Designer From Udaipur ,India working in Web
          development, I Enjoy turning complex problem into simple , beautiful
          and intuitive design.
        </p>

        <p>
          My job is to build your website to that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personak touch to your product and make sure that is eye-catching and
          web design for many famous brand companies.
        </p>
      </section>
      {/* services */}
      <section>
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="service-list">
          {serviceData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>
      {/* testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonials
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>
      {/* client Logo */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li>
            <a href="#">
              <img src="/images/logo-1-color.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/logo-2-color.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/logo-3-color.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/logo-4-color.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/logo-5-color.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/logo-6-color.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
