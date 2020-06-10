import React from "react";
import "./styles.css";
import Header from "./Component/Header.js";
import Contact from "./Component/Contact.js";
import contacts from "./Component/Contacts";

import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function handlecontact(contact) {
  return (
    <Contact name={contact.name} email={contact.email} phone={contact.phone} />
  );
}

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manageer" />
      <div className="container">{contacts.map(handlecontact)}</div>
    </div>
  );
}
export default App;
