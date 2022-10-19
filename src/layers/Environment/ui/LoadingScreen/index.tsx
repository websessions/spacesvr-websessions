import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useControlledProgress } from "./logic/loading";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const float = keyframes`
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-15px);
  }

  100% {
    transform: translatey(0px);
  }
`;

const grow = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Container = styled.div<{ finished: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  background: white;
  transition: opacity 0.75s ease-in;
  transition-delay: 0.5s;
  opacity: ${(props) => (props.finished ? "0" : "1")};
  pointer-events: ${(props) => (props.finished ? "none" : "all")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  z-index: 999999999999;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: ${grow} 1.2s ease-in-out infinite;
  /* animation: ${float} 7s ease-in-out infinite; */
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  /* right: 0; */
  width: 100%;
  /* height: 10px; */
  background: #f2f2f2;
  transform-origin: 0%;
`;

const Wrapper = styled.div`
  position: relative;

  &:before {
    pointer-events: none;
    position: absolute;
    content: "";
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
  }
`;

export default function LoadingScreen() {
  // const [seconds, setSeconds] = useState(0);
  const progress = useControlledProgress();
  const [seconds, setSeconds] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // setSeconds((seconds) => seconds + 1);
      setSeconds(!seconds);
    }, 1000);
    return () => clearInterval(interval);
  });

  // console.log('progress', progress)

  return (
    <Container finished={progress === 100}>
      <Wrapper>
        <ProgressBar
          animate={{ height: progress + "%" }}
          transition={{
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
        />
        <Text>
          {/* {seconds ? Math.round(progress) + "%" : "Experience Loading"} */}
          {seconds ? progress + "%" : "Experience Loading"}
        </Text>
      </Wrapper>
    </Container>
  );
}
