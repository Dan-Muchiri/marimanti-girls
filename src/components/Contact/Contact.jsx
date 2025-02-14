import React, { useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [formValid, setFormValid] = useState(true);
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    phone: false,
    projectDetails: false,
  });

  const handleFocus = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const isValid = form.checkValidity();
    setFormValid(isValid);
    if (isValid) {
      form.submit();
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.imageContainer}>
        <img src="/contact.jpg" alt="Contact" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>Contact Us</h2>
        <p>Email: info@marimantigirlshigh.co.ke</p>
        <p>Phone Number: +254123456789</p>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name<span className={styles.required}>*</span></label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              className={touchedFields.name && !document.getElementById('name').value ? styles.invalid : ''}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email<span className={styles.required}>*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              className={touchedFields.email && !document.getElementById('email').value ? styles.invalid : ''}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number<span className={styles.required}>*</span></label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              onFocus={() => handleFocus('phone')}
              onBlur={() => handleBlur('phone')}
              className={touchedFields.phone && !document.getElementById('phone').value ? styles.invalid : ''}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="projectDetails">How can we help you:<span className={styles.required}>*</span></label>
            <textarea
              name="projectDetails"
              id="projectDetails"
              required
              onFocus={() => handleFocus('projectDetails')}
              onBlur={() => handleBlur('projectDetails')}
              className={touchedFields.projectDetails && !document.getElementById('projectDetails').value ? styles.invalid : ''}
            ></textarea>
          </div>
          <input className={styles.subButton} type="submit" value="Submit" />
          {!formValid && <p className={styles.errorMessage}>Please fill out the required fields.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;