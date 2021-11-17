import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 html{
     /*violet */
     --primary-color: 111, 76, 255;
      
  /* white */
  --text-color: 256, 256, 256;
  --bg-image: url('https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80');

  font-family: 'DM Sans', sans-serif;
  background-color: #1D1E22;
  color:white;
  padding: 1rem;
  text-align: center;
 };
`;
