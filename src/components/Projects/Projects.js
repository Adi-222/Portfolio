import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Random from "../../Assets/Projects/passwordpic.png"
import Kanban from "../../Assets/Projects/Kanban.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Random}
              isBlog={false}
              title="Random Password Generator"
              description="Developed React JS password generator with customizable security options.
                    Features include customizable options for uppercase, lowercase, symbols, and numbers."
              ghLink="https://github.com/Adi-222/PasswordGenerator.git"
              demoLink="https://password-generator-lilac-ten.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kanban}
              isBlog={false}
              title="Kanban Task Management App"
              description="This is a JavaScript-based Kanban application that helps users organize and manage their tasks efficiently using a drag-and-drop interface."
              ghLink="https://github.com/Adi-222/Kanban-1"
              demoLink="https://vercel.com/adi-222s-projects/kanban-1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
