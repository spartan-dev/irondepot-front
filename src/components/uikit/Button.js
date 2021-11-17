import styled from "styled-components";

export const Button = styled.button`
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  padding: 12px 32px;
  margin: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  border-radius: 50px;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: ${(props) =>
      props.glow ? "rgba(var(--primary-color), 0.5) 0px 0px 20px 0px" : ""};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: rgb(var(--primary-color));
  border: 1px solid rgb(var(--primary-color));
  color: rgb(var(--text-color));
`;

export const TransparentButton = styled(Button)`
  background-color: rgba(var(--primary-color), 0.15);
  border: 1px solid rgba(var(--primary-color), 0.25);
  color: rgba(var(--text-color), 0.8);
  &:hover {
    background-color: rgba(var(--primary-color), 0.35);
    border: 1px solid rgba(var(--primary-color), 0.5);
    color: rgba(var(--text-color), 0.9);
  }
`;
export const GradientBackground = styled(Button)`
  background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167));
  border: 0;
  color: rgba(var(--text-color));
`;

export const GradientBorderButton = styled(Button)`
  color: rgba(var(--text-color));
  border: 2px double transparent;
  background-image: linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)),
    radial-gradient(circle at left top, rgb(1, 110, 218), rgb(217, 0, 192));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  &:hover {
    background-color: rgba(var(--primary-color), 0.35);
    border: 1px solid rgba(var(--primary-color), 0.5);
    color: rgba(var(--text-color), 0.9);
  }
`;
