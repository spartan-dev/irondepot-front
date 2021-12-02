import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 html{
     /*violet */
     --primary-color: 111, 76, 255;
      
  /* white */
  --text-color: 256, 256, 256;
  --bg-image: url('https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80');
 margin:0;
 padding:0;
  font-family: 'DM Sans', sans-serif;
  font-family: 'DM Sans', sans-serif;
  background-color:#151325 ; /* #151325  #1D1E22*/
  color:white;
  padding: 1rem;
  text-align: center;
  box-sizing: border-box;
  ul,ol,li{
    margin: 0;
padding: 0;
list-style: none;
  }
 };
 .container-main-card{
  display: flex;
justify-content: center;
padding:2em;

 
 }
`;
