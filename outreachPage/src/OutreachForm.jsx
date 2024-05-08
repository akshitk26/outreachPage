import { useState } from "react";

export default function OutreachForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState({ address: "", zip: "" });

  return (
    <form>
      <input
        id="firstnameInput"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        type="text"
        value={name.firstName}
      ></input>

      <input
        id="lastnameInput"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        type="text"
        value={name.lastName}
      ></input>

      <input
        id="emailInput"
        onChange={(e) => setName(e.target.value)}
        type="email"
        value={email}
      ></input>

      <input
        id="addressInput"
        onChange={(e) => setName({ ...location, address: e.target.value })}
        type="text"
        value={location.address}
      ></input>

      <input
        id="zipInput"
        onChange={(e) => setName({ ...location, zip: e.target.value })}
        type="text"
        value={location.zip}
      ></input>
    </form>
  );
}
