import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "./SingleDestination";

const DestinationsOne = () => {
  return (
    <section className="destinations-one pt-2">
      <Container>
        <Row className="masonary-layout">
          {destinationsOne.slice(0, 5).map((destination) => (
            <SingleDestination key={destination.id} destination={destination} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsOne;
