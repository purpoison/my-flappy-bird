import './App.css';
import styled from 'styled-components';
import {useEffect, useState} from 'react';


const BirdSize = 20;
const WrapSize = 500;
const Gravity = 6;
const JumpHeight = 100;
const ColumnWidth = 40;
const ColumnGap = 200;


function App() {
  const [birdPosition, setBirdPosition] = useState(250);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [columnHeight, setColumnHeight] = useState(100);
  const [columnLeft, setColumnLeft] = useState(WrapSize - ColumnWidth);

  const BottomColumnHeight = WrapSize - ColumnGap - columnHeight;

  useEffect(() => {
    let timeId;
    if (gameHasStarted && birdPosition < WrapSize - BirdSize){
     timeId = setInterval(() => {
        setBirdPosition(birdPosition => birdPosition + Gravity)
      }, 24)
    }
    return () => {
      clearInterval(timeId);
    }
  }, [birdPosition, gameHasStarted]);
  const handleClick = () =>{
    let newBirdPosition = birdPosition - JumpHeight;
    if(!gameHasStarted){
      setGameHasStarted(true);
    }
    else if(newBirdPosition < 0){
      setBirdPosition(0);
    }else{
      setBirdPosition(newBirdPosition)
    }
  };


  return (
    <div className="App">
      <Container onClick={handleClick}>   
        <GameWrap size={WrapSize}>
          <Column 
            top={0} 
            width={ColumnWidth} 
            height={columnHeight} 
            left={columnLeft}/>   
          <Column 
            top={WrapSize - (columnHeight + BottomColumnHeight)} 
            width={ColumnWidth} 
            height={BottomColumnHeight} 
            left={columnLeft}/>   
          <Bird size={BirdSize} top={birdPosition}/>
        </GameWrap>
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
const Column = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  background-color: rgb(24, 163, 24);
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
`