import styled from "styled-components";

export const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  height: 300px;
  width: 300px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: gray;
  border-radius: 10px;
`;

export const BgCard = styled(Card)`
  overflow: hidden;
  background-color: transparent;
  transition: all 0.5s;
  &:before {
    content: "";
    background-image: var(--bg-image);
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    filter: blur(30px);
    z-index: -1;
  }
  &:hover {
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
    margin: 10px;
    padding: 2em;
  }
`;
