import styled from "@emotion/styled";

export const Container = styled.div<{ paused: boolean; dev?: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: opacity 0.25s ease;
  background: rgba(0, 0, 0, ${(props) => (props.dev ? 0 : 0.25)});
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.paused ? 1 : 0)};
  pointer-events: ${(props) => (props.paused ? "all" : "none")};
  font-family: "Quicksand", sans-serif;
`;

export const ClickContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Window = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  /* background-color: #00000011;
  backdrop-filter: blur(2px); */
  background: rgb(255 255 255 / 20%);
  backdrop-filter: blur(7px);
  /* box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3); */
`;

export const Continue = styled.div<{ color: string }>`
  border-radius: 5px;
  padding: 10px 20px;
  background: linear-gradient(
    281.48deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 96.42%
  );
  border: 0.5px solid #ffffff;
  filter: drop-shadow(0px 4px 24px rgba(255, 255, 255, 0.4));
  /* backdrop-filter: blur(16px); */
  margin: 0 auto;
  z-index: 10000;
  color: white;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    transition: fill 0.4s ease-in-out;
    fill: #78e41f;
  }
`;

export const Instructions = styled.div`
  width: 100%;
  height: auto;
  margin: 30px 0;
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  & > p {
    margin: 1em 0;
  }
`;

export const MenuButton = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0);
  padding: 5px 10px;
  margin: 8px 4px;
  transition: background 0.15s linear;
  font-size: 0.5em;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const MenuLink = styled.a`
  border: 1px solid black;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0);
  padding: 5px 10px;
  margin: 8px 4px;
  transition: background 0.15s linear;
  font-size: 0.5em;
  cursor: pointer;
  text-decoration: none;
  color: black !important;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
