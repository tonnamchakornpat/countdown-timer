import styled from "styled-components";
import { HiOutlineClock } from "react-icons/hi";

export const Background = styled.div`
  background-image: url("assets/BgImg.jpg");
  background-position: center;
  background-size: cover;
  opacity: 95%;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  background-color: rgba(27, 27, 27, 0.47);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Calender = styled(HiOutlineClock)`
  width: 20vw;
  height: 18vh;
  margin: 0.5vh;
`;

export const Header = styled.h2`
  font-size: clamp(22px, 2vw, 58px);
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: clamp(16px, 1vw, 24px);
  margin-top: 0;
  margin-bottom: 2vh;
`;

export const WrapperClock = styled.div`
  display: grid;
  border: 1px solid;
  border-radius: 3px;
  grid-template-columns: repeat(7, 1fr);
  margin: 1vh 5vw;
  padding: 1vh 3vw;
  text-align: center;
`;

export const ClockItems = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.p`
  font-size: clamp(32px, 3.8vw, 80px);
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  font-size: clamp(16px, 1vw, 24px);
  margin: 0;
`;

export const Span = styled.span`
  font-size: clamp(32px, 4vw, 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
