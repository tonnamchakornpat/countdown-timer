import {
  Background,
  Container,
  Calender,
  Header,
  SubTitle,
  WrapperClock,
  ClockItems,
  Number,
  Text,
  Span,
} from "./styled";

import { useState, useEffect } from "react";
import { getCountdown } from "./getCountdown";

function App() {
  const [timerData, setTimerData] = useState({
    Days: "00",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });
  let interval;
  const startTimer = () => {
    interval = setInterval(() => {
      setTimerData(getCountdown());
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Background>
      <Container>
        <Calender />
        <Header>COUNTDOWN TIMER</Header>
        <SubTitle>Our website under construction</SubTitle>
        <WrapperClock>
          <ClockItems>
            <Number>{timerData.Days}</Number>
            <Text>Days</Text>
          </ClockItems>
          <Span>:</Span>
          <ClockItems>
            <Number>{timerData.Hours}</Number>
            <Text>Hours</Text>
          </ClockItems>
          <Span>:</Span>
          <ClockItems>
            <Number>{timerData.Minutes}</Number>
            <Text>Minutes</Text>
          </ClockItems>
          <Span>:</Span>
          <ClockItems>
            <Number>{timerData.Seconds}</Number>
            <Text>Seconds</Text>
          </ClockItems>
        </WrapperClock>
      </Container>
    </Background>
  );
}

export default App;
