// AboutMe.js
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 600px;
  margin: 2rem auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const PortfolioButton = styled.a`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #2ecc71;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    color: #2ecc71;
    background-color: #ffffff;
  }
`;

const AboutMe = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Description>
        I’m a frontend developer with a passion for crafting beautiful,
        user-friendly web applications. I’m always looking to expand my skills
        and work on exciting new projects.
      </Description>
      <PortfolioButton
        href="https://cardinal-dev.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Portfolio
      </PortfolioButton>
    </AboutContainer>
  );
};

export default AboutMe;
