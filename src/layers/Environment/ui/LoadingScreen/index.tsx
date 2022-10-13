import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useControlledProgress } from "./logic/loading";
// import { useProgress } from "@react-three/drei";
import { motion, useScroll, useSpring } from "framer-motion";
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
  /* animation: ${float} 7s ease-in-out infinite; */
  /* animation: ${grow} 1.2s ease-in-out infinite; */
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: black;
  transform-origin: 0%;
  z-index: 999999999999;
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
    /* background: -webkit-radial-gradient(
      center,
      ellipse,
      rgba(0, 0, 0, 0.35) 0%,
      transparent 80%
    );
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      transparent 80%
    ); */
    /* -webkit-transition-duration: 0.3s; */
    /* transition-duration: 0.3s; */
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
  }
`;

export default function LoadingScreen() {
  // const [seconds, setSeconds] = useState(0);
  const [seconds, setSeconds] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // setSeconds((seconds) => seconds + 1);
      setSeconds(!seconds);
    }, 1000);
    return () => clearInterval(interval);
  });

  const progress = useControlledProgress();
  // const { progress, total } = useProgress();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Container finished={progress === 100}>
      <Wrapper>
        <ProgressBar style={{ scaleX }} />
        <Text>
          {/* {Math.round(progress)}% */}
          {progress === 100
            ? "Done"
            : seconds
            ? Math.round(progress) + "%"
            : "Experience Loading"}
        </Text>
      </Wrapper>
    </Container>
  );
}
