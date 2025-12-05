"use client";
import React from "react";
import "./contact.css";
import { FaMapMarked, FaMapMarkedAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMailOpen } from "react-icons/io";


export default function ContactFirst() {
  return (
    <>
      <section className="contact-wrapper">
        <div className="contact-container">

          <p className="contact-heading-top">Contact Us</p>

          <h2 className="contact-main-heading">
            CONNECT WITH <span className="pink-text">18HOMES</span> SUPPORT
          </h2>

          <div className="contact-grid">

            {/* LEFT SIDE */}
            <div className="left-info">

              <div className="info-block">
                <div className="icon-wrap">
                  <FiPhoneCall size={30} />
                </div>

                <div>
                  <p className="info-title">Give Us A Call</p>
                  <p className="info-value">+91 8707592647</p>
                </div>
              </div>

              <hr />

              <div className="info-block">
                <div className="icon-wrap">
                  <IoMdMailOpen size={30} />
                </div>

                <div>
                  <p className="info-title">Send Us A Message</p>
                  <p className="info-value">18homes@gmail.com</p>
                </div>
              </div>

              <hr />

              <div className="info-block">
                <div className="icon-wrap">
                  <FaMapMarkedAlt size={30} />
                </div>

                <div>
                  <p className="info-title">Visit Our Location</p>
                  <p className="info-value">
                    MB-27 Basement, Regalia Heights,
                    Shipra Suncity, Ghaziabad.
                  </p>
                </div>

              </div>
              <hr />
              {/* BOTTOM SOCIAL ICONS */}
              <div className="bottom-row">
                <div className="bottom-socials">
                  <div className="social-circle">
                    <div className="square"></div>
                  </div>

                  <div className="social-circle">
                    <div className="square"></div>
                  </div>

                  <div className="social-circle">
                    <div className="square"></div>
                  </div>
                </div>
              </div>



            </div>

            {/* RIGHT FORM */}
            <form className="right-form">

              <div className="input-row">
                <input type="text" placeholder="Enter Name.*" />
                <input type="text" placeholder="Enter Mobile No.*" />
              </div>

              <div className="input-row">
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Select Event for" />
              </div>

              <textarea rows={2} placeholder="Your Message"></textarea>

              {/* BUTTON */}
              <button type="submit" className="submit-message-btn relative">
                <span className="submit-circle"></span>
                <span className=" z-50 absolute left-[32px]  ">SUBMIT MESSAGE</span>
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.9068180297566!2d77.37318488857568!3d28.63534709805912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5af51299c15%3A0x14f31deb7b3887b0!2sDj%20Harmony%20Beats!5e0!3m2!1sen!2sin!4v1764173397758!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
