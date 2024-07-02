import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import {
  Container,
  Header,
  Title,
  Subtitle,
  ProfileImage,
  About,
  AboutText,
} from "./components/Container";

import { Footer, FooterText } from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <Container>
          <Header>
            <Title>John Doe</Title>
            <Subtitle>Web Developer</Subtitle>
          </Header>

          <ProfileImage src="https://picsum.photos/300/300" alt="Profile" />

          <About>
            <AboutText>
              Hi! I'm John Doe, a passionate web developer with expertise in
              creating modern and responsive web applications. I love working
              with the latest web technologies and turning ideas into reality.
            </AboutText>
          </About>
        </Container>

        <Footer>
          <FooterText>&copy; 2024 John Doe. All rights reserved.</FooterText>
        </Footer>
      </div>
    </>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  background-color: #0d0d0d;
  color: #00ff99;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
}

.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
`;