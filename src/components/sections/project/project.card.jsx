import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./project.css";

function ProjectCard({ imgPath, title, description, githubLink, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="project" style={{ maxHeight: 215 }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title || "No title"}</Card.Title>
        <div className="d-flex flex-column justify-content-between h-100">
          <Card.Text style={{ textAlign: "justify" }}>
            {description || ""}
          </Card.Text>
          <div>
            <Button variant="primary" href={githubLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
