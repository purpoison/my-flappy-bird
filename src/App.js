import './App.css';
import styled from 'styled-components';
import {useEffect, useState} from 'react';


const BirdSize = 20;
const WrapSize = 500;


function App() {
  const [birdPosition, setBirdPosition] = useState(250);
  useEffect(() => {})



  return (
    <div className="App">
      <Container>      
        <GameWrap size={WrapSize}><Bird size={BirdSize} top={birdPosition}/></GameWrap>
      </Container>
    </div>
  );
}

export default App;

const Bird = styled.div `
  position: absolute;
  background-color: rgb(237, 200, 49);
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const GameWrap = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: rgb(32, 87, 238);
`