import { useState } from "react";
import styles from "./OutreachForm.module.css";

export default function OutreachForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState({ address: "", zip: "" });
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form>
      <div className={styles.row} id={styles.row1}>
        <div>
          <p>First Name</p>

          <input
            id="firstnameInput"
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            type="text"
            value={name.firstName}
          ></input>
        </div>

        <div>
          <p>Last Name</p>

          <input
            id="lastnameInput"
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            type="text"
            value={name.lastName}
          ></input>
        </div>
      </div>

      <div className={styles.row} id={styles.row2}>
        <div>
          <p>Address</p>

          <input
            id="addressInput"
            onChange={(e) =>
              setLocation({ ...location, address: e.target.value })
            }
            type="text"
            value={location.address}
          ></input>
        </div>

        <div>
          <p>Zip Code</p>

          <input
            id="zipInput"
            onChange={(e) => setLocation({ ...location, zip: e.target.value })}
            type="text"
            value={location.zip}
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
          ></input>
        </div>

        <div>
          <p>Message</p>

          <input
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            value={message}
          ></input>
        </div>
      </div>

      <div>
        <button onClick={(e) => handleSubmit(e)}>Send</button>
      </div>
    </form>
  );
}
