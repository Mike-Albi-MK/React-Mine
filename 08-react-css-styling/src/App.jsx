import { useState } from 'react';

import Heading from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx';

import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ProgressBar from 'react-bootstrap/ProgressBar';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastBody } from 'react-bootstrap';

function ContextualExample() {
  return (
    <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  );
};

function AnimatedExample() {
  return <ProgressBar animated now={45} />;
};

function App() {
  const [show, setShow] = useState(true);
  return (
  <div className="App">
    {/* Inline styling */}
    <Heading />

    {/* External styles with css */}
    <img src="https://picsum.photos/300/300" className="picsum"></img>
    <Footer />
    <Button variant="success">Button</Button>
    <Toast show={show} onClose={() => setShow(false)}>
      <Toast.Header>
      <strong className="me-auto">Bootstrop</strong>
      <small>11 minutes ago</small>
      </Toast.Header>
      <ToastBody>Hello, world! This is a toast message</ToastBody>
    </Toast>
    <ContextualExample />
    <br />
    <Button variant="danger">Danger!!!</Button>
    <AnimatedExample />
  </div>
  )
}

export default App;
