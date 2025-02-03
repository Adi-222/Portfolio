import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiVercel } from "react-icons/si";

function Toolstack() {
  const iconStyle = {
    fontSize: "3rem",
    padding: "20px",
    borderRadius: "15px",
    background: "linear-gradient(45deg, #6a11cb, #2575fc)", // Gradient background
    color: "#fff", // White icons
    transition: "transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out", // Smooth transition with longer duration
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
  };

  const iconHoverStyle = {
    transform: "scale(1.3) rotate(15deg)", // Increased size and rotation on hover
    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.3)", // Larger shadow on hover
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ ...iconStyle, ":hover": iconHoverStyle }} className="tech-icon">
          <SiVisualstudiocode />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ ...iconStyle, ":hover": iconHoverStyle }} className="tech-icon">
          <SiPostman />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ ...iconStyle, ":hover": iconHoverStyle }} className="tech-icon">
          <SiVercel />
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
