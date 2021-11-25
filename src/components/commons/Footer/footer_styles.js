import styled from "styled-components";

export const FooterContainer = styled.div`
  z-index: 20;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

export const Footer = styled.footer`
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const Footerbody = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style: none;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  row-gap: 32px;
`;
export const FooterNavigation = styled.nav`
  box-sizing: border-box;
`;
export const FirstLinks = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-column-gap: 16px;
  column-gap: 16px;
  row-gap: 16px;
  margin: 0px;
  padding: 0px;
  list-style: none;
  @media screen and (min-width: 749px) {
    -webkit-column-gap: 32px;
    column-gap: 32px;
  }
  @media screen and (min-width: 641px) {
    -webkit-column-gap: 24px;
    column-gap: 24px;
    margin-bottom: 0.8rem;
  }
  /*   media querie (min-width:749px) -webkit-column-gap: 32px;
column-gap: 32px; */
  /* media querie de (min:width: 641px) -webkit-column-gap: 24px;
column-gap: 24px; */
  li {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    a {
      -webkit-text-decoration: none;
      text-decoration: none;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: white;
      opacity: 0.88;
      -webkit-transition: opacity 0.3s ease;
      transition: opacity 0.3s ease;
      @media screen and (min-width: 641px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      /* media querie from min-width(641px) font-size: 1rem;
line-height: 1.5rem; */
    }
  }
`;
export const SecondListNav = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-column-gap: 16px;
  column-gap: 16px;
  row-gap: 8px;
  margin: 0px;
  margin-top: 0px;
  padding: 0px;
  list-style: none;
  margin-top: 16px;
  @media screen and (min-width: 749px) {
    margin-top: 24px;
    column-gap: 32px;
  }
  /* 
 media queries 
 min-width(749) {
     margin-top: 24px;
    column-gap: 32px;
    }

*/
`;

export const SeconLinks = styled.li`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  a {
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 0.75rem;
    line-height: 1rem;
    color: white;
    opacity: 0.48;
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
    @media screen and (min-width: 641px) {
      font-size: 0.875rem;
      line-height: 1.25rem;
      &:hover {
        opacity: 0.88;
      }
    }
  }
`;

export const SocialMediaIcons = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-column-gap: 16px;
  column-gap: 16px;
  row-gap: 16px;
  margin: 0px;
  padding: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  list-style: none;
  padding-top: 6px;
  padding-bottom: 6px;

  li {
    display: flex;
    a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 32px;
      height: 32px;
      opacity: 0.88;
      -webkit-transition: opacity 0.3s ease;
      transition: opacity 0.3s ease;
      img {
        display: block;
        width: 16px;
        height: 16px;
      }
    }
  }
`;

/* //todo
separar en estilos diferentes o con selectrores separados los ul > li > a 
*/
