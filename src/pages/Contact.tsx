import "../styles/contact.css";
//import ExternalLink from "../ExternalLink";
import Button from "../Button";

export default function Contact() {
  return (
    <>
      <hr />
      <h1>Contact me!</h1>
      <div className="container">
        <div className="box">
          For any enquires or opportunities, please contact me via my LinkedIn
          profile using the link below:
        </div>
        <div className="button">
          <Button
            url="https://www.linkedin.com/in/aduncalf/"
            label="LinkedIn Profile"
          />
        </div>
      </div>
    </>
  );
}
