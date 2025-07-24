import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Random from "../../Assets/Projects/passwordpic.png";
import Kanban from "../../Assets/Projects/Kanban.png";
import Whiteboard from "/Users/user/Desktop/Portfolio-main/src/Assets/whiteboard.png"; // Reused image

function Projects() {
  return (
    <Container fluid className="project-section bg-dark text-white py-5">
      <Particle />
      <Container>
        <h1 className="project-heading text-center mb-4" style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="text-center text-muted mb-5">
          Here are a few projects I've worked on recently.
        </p>

        <Row className="justify-content-center g-4">
          {/* Password Generator */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Random}
              isBlog={false}
              title="Random Password Generator"
              description="A secure and customizable password generator built with React. Includes options for symbols, numbers, and mixed casing."
              ghLink="https://github.com/Adi-222/PasswordGenerator.git"
              demoLink="https://password-generator-lilac-ten.vercel.app/"
            />
          </Col>

          {/* Kanban Board */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kanban}
              isBlog={false}
              title="Kanban Task Manager"
              description="Drag-and-drop task manager for efficient project tracking. Developed using HTML, CSS, and JavaScript."
              ghLink="https://github.com/Adi-222/Kanban-1"
              demoLink="https://vercel.com/adi-222s-projects/kanban-1"
            />
          </Col>

          {/* Payments App (reuses Whiteboard image) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Whiteboard}
              isBlog={false}
              title="Payments App"
              description="A sleek payments app using Razorpay API. Handles transactions and tracks payment history. Built with React and Tailwind."
              ghLink="https://github.com/Adi-222/Paytm"
              demoLink="https://payments-app.vercel.app"
            />
          </Col>

          {/* Whiteboard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Whiteboard}
              isBlog={false}
              title="Collaborative Whiteboard"
              description="Draw and collaborate in real-time with other users using socket.io and Node.js backend."
              ghLink="https://github.com/Adi-222/Whiteboard"
              demoLink="https://whiteboard-live.vercel.app"
            />
          </Col>

          {/* E-commerce (reuses Whiteboard image) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Whiteboard}
              isBlog={false}
              title="E-commerce Storefront"
              description="Modern storefront with product listings, cart, and checkout system using React and Firebase."
              ghLink="https://github.com/Adi-222/ecommerce-store"
              demoLink="https://ecommerce-storefront.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
