import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import background from "../background.jpg";

function About() {
  return (
    <div>
      <Hero backgroundImage={background}>
        <h1>21 Day Challenge</h1>
        <h2>Transform Yourself with Super & Small Habits</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>How Long it Really Takes to Build a New Habit</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Phillippa Lally is a health psychology researcher at University College London. In a study published in the European Journal of Social Psychology, Lally and her research team decided to figure out just how long it actually takes to form a habit.
              <br></br><br></br>
              The study examined the habits of 96 people over a 12-week period. Each person chose one new habit for the 12 weeks and reported each day on whether or not they did the behavior and how automatic the behavior felt.
              <br></br><br></br>
              Some people chose simple habits like “drinking a bottle of water with lunch.” Others chose more difficult tasks like “running for 15 minutes before dinner.” At the end of the 12 weeks, the researchers analyzed the data to determine how long it took each person to go from starting a new behavior to automatically doing it.
              <br></br><br></br>
              The answer?
            </p>
            <p>
              <b>On average, it takes more than 2 months before a new behavior becomes automatic — 66 days to be exact. </b>And how long it takes a new habit to form can vary widely depending on the behavior, the person, and the circumstances. In Lally's study, it took anywhere from 18 days to 254 days for people to form a new habit. 
              In other words, if you want to set your expectations appropriately, the truth is that it will probably take you anywhere from two months to eight months to build a new behavior into your life — not 21 days.
            </p>
            <p>
              Interestingly, the researchers also found that “missing one opportunity to perform the behavior did not materially affect the habit formation process.” In other words, it doesn’t matter if you mess up every now and then. Building better habits is not an all-or-nothing process.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
