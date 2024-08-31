import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import neuro from "../../Assets/Projects/neuro.png";
import emotion from "../../Assets/Projects/emotion.png";
import watcher from "../../Assets/Projects/watcher.png";
import dice from "../../Assets/Projects/Dice.png"
import bitsOfCode from "../../Assets/Projects/blog.png";
import Design from "../../Assets/Projects/Design.png";


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
              imgPath={neuro}
              isBlog={false}
              title=" Neurodiverse Education System"
              description="An AI-driven platform designed to enhance learning for neurodiverse students using interactive games like Whack-a-Mole and Hangman, providing a personalized and engaging educational experience."
              ghLink="https://github.com/StrugglerSuryansh/static-site"
              demoLink="https://static-site-tan.vercel.app/Main/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Queue Reduction System"
              description="A system that uses facial recognition and blockchain technology to optimize queue management, reducing wait times and enhancing data security in public and private environments."
              ghLink="https://github.com/StrugglerSuryansh/DiceGame"
              demoLink="https://project-3-mu-brown.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watcher}
              isBlog={false}
              title="Watch Party Web App"
              description="A web application built with React.js, Vite, and ZegoCloud API that allows users to watch videos together in real time. It features synchronized viewing experiences through WebSockets and offers a smooth streaming experience."
              ghLink="https://github.com/StrugglerSuryansh/watcher"
              demoLink="https://watcher-01.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Design}
              isBlog={false}
              title="Web designing"
              description="Developed a visually stunning website using GSAP for smooth animations and mastered hosting to ensure global accessibility. The project aimed for Awwwards recognition by showcasing advanced front-end skills and design excellence."
              ghLink="https://github.com/StrugglerSuryansh/project-2"
              demoLink="https://strugglersuryansh.github.io/project-2/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title="The Dice Game"
              description="Created a fun dice game project in React to master core concepts like state management and conditional rendering. Roll a dice, select a number, and score points based on matches. Designed and styled in Figma. 🚀"
              ghLink="https://github.com/StrugglerSuryansh/DiceGame"
              demoLink="https://project-3-mu-brown.vercel.app/"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
