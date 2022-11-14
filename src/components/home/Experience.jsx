import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experience }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron fluid id="experience" className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experience.heading}
          </h2>
          <Row>
            {
              experience.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;