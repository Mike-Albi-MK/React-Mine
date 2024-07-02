import styled, { createGlobalStyle, css } from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
  color: ${5 < 1 ? "red" : "green"};
  margin: 1rem;

  ${(props) => {props.value}}
`;

const Input = styled.input`
  border: ${false ? "1px solid red" : "1px solid #ddd"};
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const LoginButton = styled.button`
  margin: 0.2rem;
  padding: 1.2rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  background-color: #0e441a;
`;

const SignUpButton = styled(LoginButton)`
  background-color: tomato;
`;

const GlobalStylesApp = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box
  }

  body{
    background-color:#061f36;
  }

  .app{
    background-color: #243a4e;
    padding:1rem

  }
`;

const Heading = styled.h1`
    color: #ddd;

    ${(props) => {
      return (props.as === "h1" && 
      css`
        color: tomato;
      `
      );
    }}
`;

function App() {
  return (
    <div className="app">
      <GlobalStylesApp />
      <H1 value="Styled Components">Styled Components</H1>

      <Heading as="h1">H1</Heading>
      <Heading as="h2">H2</Heading>
      <Heading as="h3">H3</Heading>

      <LoginButton>Log in</LoginButton>
      <SignUpButton onClick={() => alert("Sign up")}>Sign up</SignUpButton>

      <Input type="number" placeholder="Number of Guests"></Input>
    </div>
  );
}

export default App;