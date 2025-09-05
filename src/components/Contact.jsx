import React from "react";
import { contactData } from "../mockData";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h2 className="display-4 fw-bold text-dark mb-3">Get In Touch</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            I'm always interested in new opportunities and exciting projects.
            Let's connect!
          </p>
        </div>

        <div className="row g-4">
          {/* Email */}
          <div className="col-md-4">
            <div className="text-center p-4 bg-primary bg-opacity-10 rounded-3 card-hover h-100">
              <div
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "64px", height: "64px" }}
              >
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h5 className="fw-semibold text-white mb-2">Email</h5>
              {/* <p className="text-white fw-medium mb-0">{contactData.email}</p> */}
              <a href={`mailto:${contactData.email}`} className="text-white fw-medium mb-0 text-decoration-none">
                {contactData.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-4">
            <div className="text-center p-4 bg-primary bg-opacity-10 rounded-3 card-hover h-100">
              <div
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "64px", height: "64px" }}
              >
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h5 className="fw-semibold text-white mb-2">Phone</h5>
              {/* <p className="text-white fw-medium mb-0">{contactData.phone}</p> */}
              <a href={`tel:${contactData.phone}`} className="text-white fw-medium mb-0 text-decoration-none">
                {contactData.phone}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="col-md-4">
            <div className="text-center p-4 bg-primary bg-opacity-10 rounded-3 card-hover h-100">
              <div
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "64px", height: "64px" }}
              >
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h5 className="fw-semibold text-white mb-2">Location</h5>
              {/* <p className="text-white fw-medium mb-0">{contactData.address}</p> */}
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`} target="_blank" rel="noopener noreferrer" className="text-white fw-medium mb-0 text-decoration-none">
                {contactData.address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
