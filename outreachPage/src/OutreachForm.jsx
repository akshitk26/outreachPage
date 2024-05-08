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
    <div className={styles.body}>
      <form>
        <div className={styles.row} id={styles.row1}>
          <div>
            <p>First Name</p>

            <input
              id="firstnameInput"
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
              type="text"
              value={name.firstName}
              placeholder="John"
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
            ></input>
          </div>
        </div>

        <div>
          <button onClick={(e) => handleSubmit(e)}>Send</button>
        </div>
      </form>
    </div>
  );
}
