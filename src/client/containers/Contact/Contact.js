import React from "react";
import "./Contact.css";
import { ContactLinks } from "../../components/ContactLinks/ContactLinks";

export const Contact = () => {
  return (
    <div className="contact">
      <h2>You can find me in:</h2>
      <ContactLinks></ContactLinks>
      <h2 className="contact-second">
        Or reach me at{" "}
        <a href="mailto:valentina.mdz@gmail.com">valentina.mdz@gmail.com</a>{" "}
      </h2>
      <></>
    </div>
  );
};
