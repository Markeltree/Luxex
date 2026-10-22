import styles from "./Reservation.module.scss";
import { useState } from "react";

function Reservation({ className = "", id }) {
  const today = new Date().toISOString().split("T")[0];

  const [values, setValues] = useState({
    checkIn: today,
    checkOut: today,
    email: "",
    persons: 1,
    children: 0,
  });

  const [errors, setErrors] = useState({
    checkIn: false,
    checkOut: false,
    email: false,
    persons: false,
    children: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // clear error when user types
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!values.checkIn) {
      newErrors.checkIn = "This field is required";
    }

    if (!values.checkOut) {
      newErrors.checkOut = "This field is required";
    } else if (new Date(values.checkIn) >= new Date(values.checkOut)) {
      newErrors.checkOut = "Invalid Check-Out";
    }

    if (!values.email.trim()) {
      newErrors.email = "This field is required";
    } else {
      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email)) {
        newErrors.email = "Invalid Email Address";
      }
    }

    if (values.persons === "" || values.persons === null) {
      newErrors.persons = "This field is required";
    } else if (values.persons < 1) {
      newErrors.persons = "Invalid Number";
    }

    if (values.children === "" || values.children === null) {
      newErrors.children = "This field is required";
    } else if (values.children < 0) {
      newErrors.children = "Invalid Number";
    }

    setErrors(newErrors);

    // only submit if there are no errors
    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (!hasErrors) {
      console.log("Form submitted:", values);
    }
  };
  return (
    <div id={id} className={`${styles.reservationContainer} ${className}`.trim()}>
      <div className={styles.reservation}>
        <div className={styles.reservationItem}>
          <label htmlFor="checkIn">Check In</label>
          <div className={styles.inputContainer}>
            <input id="checkIn" name="checkIn" type="date" value={values.checkIn} min={today} onChange={handleChange} />
            {errors.checkIn && <span className={styles.error}>{errors.checkIn}</span>}
          </div>
        </div>

        <div className={styles.reservationItem}>
          <label htmlFor="checkOut">Check Out</label>
          <div className={styles.inputContainer}>
            <input id="checkOut" name="checkOut" type="date" value={values.checkOut} min={values.checkIn} onChange={handleChange} />
            {errors.checkOut && <span className={styles.error}>{errors.checkOut}</span>}
          </div>
        </div>

        <div className={styles.reservationItem}>
          <label htmlFor="email">Email</label>
          <div className={styles.inputContainer}>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="Enter Email" value={values.email} onChange={handleChange} />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
        </div>

        <div className={styles.reservationItem}>
          <label htmlFor="persons">Persons</label>
          <div className={styles.inputContainer}>
            <input
              id="persons"
              name="persons"
              type="number"
              min="1"
              inputMode="numeric"
              value={values.persons}
              onChange={handleChange}
              placeholder="# of Adults"
            />
            {errors.persons && <span className={styles.error}>{errors.persons}</span>}
          </div>
        </div>

        <div className={styles.reservationItem}>
          <label htmlFor="children">Children</label>
          <div className={styles.inputContainer}>
            <input
              id="children"
              name="children"
              type="number"
              min="0"
              inputMode="numeric"
              value={values.children}
              onChange={handleChange}
              placeholder="# of Children"
            />
            {errors.children && <span className={styles.error}>{errors.children}</span>}
          </div>
        </div>

        <button onClick={handleSubmit} className={styles.bookButton}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Reservation;
