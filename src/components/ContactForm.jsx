// src/components/ContactForm.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, message: "Please fill in all fields.", error: true });
      return;
    }

    setStatus({ loading: true, message: "", error: false });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({ loading: false, message: "Message sent successfully!", error: false });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus({ loading: false, message: "Failed to send message. Please try again.", error: true });
      });
  };

  return (
    <section className={styles.contactSection} id="Contact">
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionSubtitle}>
          Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.formInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={styles.formTextarea}
            rows="6"
          />
          <button type="submit" className={styles.submitButton} disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
          </button>
          {status.message && (
            <p className={`${styles.statusMessage} ${status.error ? styles.error : styles.success}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
