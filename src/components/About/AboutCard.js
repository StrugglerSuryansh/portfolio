import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suryansh </span>
            from <span className="purple"> Uttarpradesh Meerut</span>
            <br />
            I am a Btech Undergrad at Meerut Insititute of engineering and technology
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading  Tech Articles
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "From i cant but i won't to i can and i will !"{" "}
          </p>
          <footer className="blockquote-footer">Suryansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
