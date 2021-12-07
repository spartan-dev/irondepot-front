import styled from "styled-components";

export const TextGlow = styled.h1`
  text-shadow: 0 0 80px rgb(192 219 255 / 35%), 0 0 32px rgb(65 120 255 / 24%);
`;

export const TextGradient = styled.span`
  font-size: ${(props) => (props.large ? "2.5em" : "1.5em")};
  background: linear-gradient(to right, #30cfd0, #c43ad6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
