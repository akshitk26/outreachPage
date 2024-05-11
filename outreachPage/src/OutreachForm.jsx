import { useState } from "react";
import styles from "./OutreachForm.module.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function OutreachForm() {
  //state vars for user info
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState({ address: "", zip: "" });
  const [message, setMessage] = useState("");

  const serviceID = "outreach_service";
  const templateID = "outreach_page_form";
  const publicKey = "s5tP-ZwWfM4ocv1sQ";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={styles.body}>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.row} id={styles.row1}>
          <div>
            <p>First Name</p>

            <input
              id="firstnameInput"
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
              type="text"
              value={name.firstName}
              placeholder="John"
              name="first_name"
            ></input>
          </div>

          <div>
            <p>Last Name</p>

            <input
              id="lastnameInput"
              onChange={(e) => setName({ ...name, lastName: e.target.value })}
              type="text"
              value={name.lastName}
              placeholder="Doe"
              name="last_name"
            ></input>
          </div>
        </div>

        <div className={styles.row} id={styles.row2}>
          <div>
            <p>Address</p>

            <input
              id={styles.addressInput}
              onChange={(e) =>
                setLocation({ ...location, address: e.target.value })
              }
              type="text"
              value={location.address}
              placeholder="123 Main Street"
              name="address"
            ></input>
          </div>

          <div>
            <p>Zip Code</p>

            <input
              id="zipInput"
              onChange={(e) =>
                setLocation({ ...location, zip: e.target.value })
              }
              type="text"
              value={location.zip}
              placeholder="11111"
              name="zip"
            ></input>
          </div>
        </div>

        <div className={styles.row} id={styles.row3}>
          <div>
            <p>Email address</p>

            <input
              id="emailInput"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="johndoe@gmail.com"
              name="email"
            ></input>
          </div>

          <div>
            <p>Message</p>

            <input
              id={styles.messageInput}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              value={message}
              placeholder="Start typing here..."
              name="message"
            ></input>
          </div>
        </div>

        <div>
          <button value="Send">Send</button>
        </div>
      </form>
    </div>
  );
}
