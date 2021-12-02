import styled from "styled-components";

export const Header = styled.header`
  /* position: absolute; */
  margin: auto;
  padding: 0 32px;
  max-width: 1340px;
  z-index: 100;
  right: 0;
  left: 0;
`;

export const HeaderInside = styled.header`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 10;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 100px;
`;

export const NavContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 4px;
  padding-right: 4px;
`;

export const Brand = styled(NavContainer)`
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
`;

export const NavWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const Nav = styled.nav`
  margin-top: 1px;
  display: block;
`;

export const NavInside = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, max-content);
`;
export const NavGridLinks = styled(NavInside)`
  grid-template-columns: repeat(5, max-content);
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  a {
    color: #ffffffe0;
    border-bottom: 1px solid;
    border-bottom-color: currentcolor;
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    border-color: transparent;
    opacity: 0.7;
    -webkit-transition: font-weight, text-shadow, opacity 0.3s ease;
    transition: font-weight, text-shadow, opacity 0.3s ease;
    font-size: 16px;
  }
  &:hover {
    border-color: transparent;
    opacity: 0.85;
  }
`;
