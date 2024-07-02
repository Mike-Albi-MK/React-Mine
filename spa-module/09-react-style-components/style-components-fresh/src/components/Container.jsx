import styled from "styled-components";

//! Main container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 20px;
  flex: 1;
`;

//! Header
const Header = styled.header`
  padding: 20px;
  background: linear-gradient(to right, #0d0d0d, #1a1a1a, #262626);
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 2px -2px #00ff99;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #00ff99;
  text-shadow: 0 0 5px #00ff99, 0 0 10px #00ff99, 0 0 15px #00ff99;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #ff6666;
`;

//! Profile image
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 20px 0;
  border: 2px solid #00ff99;
  box-shadow: 0 0 10px #00ff99;
`;

//! Section

const About = styled.section`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 0 10px #00ff99;
`;

const AboutText = styled.p`
  font-size: 1.1em;
  color: #b3b3b3;
  text-align: left;
`;
export { Container, Header, Title, Subtitle, ProfileImage, About, AboutText };