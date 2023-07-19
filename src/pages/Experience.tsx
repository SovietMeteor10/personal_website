import CollapsibleButton from "../Collapsible";
import "../styles/experience.css";

export default function Experience() {
  return (
    <>
      <hr></hr>
      <h1> Work Experience</h1>
      <div>
        <CollapsibleButton title="Petroineos - Risk Analyst">
          <p>
            I currently work as a Product Controller at Petroineos, a
            commodities trading firm.
          </p>
        </CollapsibleButton>

        <CollapsibleButton title="Mirage Technology Ltd - Founder">
          <p>
            Founder of my own augmented reality mobile app startup and worked in
            my own time managing the team and its operations using agile
            methods. I was responsible for the product management, marketing and
            finances of the business (including fund raising and grant
            applications). Innovation, entrepreneurship and determination have
            been vital to the company’s success and is something I bring to
            everything I do.
          </p>
        </CollapsibleButton>
        <CollapsibleButton title="Guinness Ventures - Data Intern">
          <p>
            I undertook two internships at Guinness where I worked closely with
            the investment teams to review and construct the architecture for a
            new CRM system. I used Dynamics, Excel, Word, Powerpoint, PowerBI,
            Zendesk and Mailchimp to optimise data processing systems for client
            communication, data storage.
          </p>
        </CollapsibleButton>
        <CollapsibleButton title="Affinity Shipping - Data Scientist">
          <p>
            A client facing role in which I built upon existing financial models
            using Python and Microsoft Excel and conducted multi-variate
            regression data analysis for a sustainable financial products team.
            I mainly worked in carbon markets and developed a keen interest in
            eco-financial instruments. Being part of a small team exposed me to
            various operations within the business and gave me a greater
            understanding of financial markets.
          </p>
        </CollapsibleButton>
      </div>
    </>
  );
}
