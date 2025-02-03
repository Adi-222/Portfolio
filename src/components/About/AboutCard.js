import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  const cardStyle = {
    background: "linear-gradient(135deg, #40e0d0, #9d4edd)", // Turquoise and Purple gradient
    color: "#000000", // Black text
    borderRadius: "20px", // Rounded corners
    padding: "20px", // Padding inside the card
    transition: "transform 0.5s, box-shadow 0.5s, background 0.5s",
    overflow: "hidden",
  };

  const textStyle = {
    color: "#000000", // Black text
    fontWeight: "bold", // Bold text
    fontSize: "1.2rem", // Font size for the text
  };

  const quoteStyle = {
    color: "#fbfefb", // Orange color for the quote
    fontStyle: "italic", // Italicized quote text
    marginTop: "1rem",
  };

  const footerStyle = {
    backgroundColor: "#13315c", // Custom dark blue for footer background
    color: "#ffffff", // White text for footer
    padding: "10px", // Optional padding
    borderRadius: "5px", // Rounded corners for the footer
    fontStyle: "italic", // Italicized footer text
    marginTop: "1rem", // Margin for spacing
  };

  return (
    <Card className="quote-card-view about-card" style={cardStyle}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-text" style={textStyle}>
            Hi Everyone, I am <span className="purple">Aditya Srivastava</span> from
            <span className="purple"> West Bengal, India.</span>
            <br />
            <span className="highlight">Campus Mantri GeeksForGeeks</span>
            <br />
            I am pursuing B.Tech in Computer Science Engineering.
            <br />
            <br />
            Highly motivated and dedicated Engineering Fresher with a strong
            educational background and a passion for innovation. Equipped with
            theoretical knowledge gained through academic coursework and
            practical experience from internships and projects. Excellent
            problem-solving skills and a proactive approach to learning and
            adapting to new technologies. Strong communication and teamwork
            abilities, with a proven track record of collaborating effectively
            in multidisciplinary environments. Seeking an opportunity to
            contribute to the growth and success of a dynamic engineering team.
          </p>
          <p className="quote" style={quoteStyle}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer" style={footerStyle}>
            Aditya Srivastava
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
