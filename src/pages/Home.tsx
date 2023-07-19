import "../styles/home.css";
import imageToAdd from "../assets/AnthonyMorocco.jpeg";

export default function Home() {
  return (
    <>
      <hr></hr>
      <div className="totalcontainer">
        <div className="textContainer">
          <h1>
            My name is Anthony Duncalf and I am the best type of entrepreneur -
            a failed one! <br />
            <br /> Welcome to my website
          </h1>
        </div>
        <div className="photoContainer">
          <img src={imageToAdd} alt="Anthony in Morocco" className="photo" />
        </div>
      </div>
    </>
  );
}
