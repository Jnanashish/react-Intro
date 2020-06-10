import React from "react";
import PropTypes from "prop-types";
import "./contact.css"; //external css

function Contact(props) {
  const { name, email, phone } = props; //destructuring
  return (
    <div className="card card-body mb-3">
      <h3>{name}</h3>
      <ul className="list-group">
        <li className="list-group-item">Email : {email} </li>
        <li className="list-group-item">Phone: {phone} </li>
      </ul>
    </div>
  );
}

Contact.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
