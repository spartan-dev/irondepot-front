import {
  Header,
  HeaderInside,
  NavContainer,
  Brand,
  NavWrapper,
  Nav,
  NavInside,
  NavGridLinks,
  NavLinks,
} from "./navbar_styles";

const NavBar = () => {
  return (
    <Header>
      <HeaderInside>
        <NavContainer>
          <Brand>
            <NavWrapper>
              <a href="www" style={{ marginRight: "1.5em" }}>
                <img
                  width={80}
                  heigth={80}
                  src="https://building.co/wp-content/uploads/2017/01/ironhack-logo.png"
                  alt="ironhack logo"
                />
              </a>
              <Nav>
                <NavInside>
                  <NavGridLinks>
                    <NavLinks>
                      <a href="www">Home</a>
                    </NavLinks>
                    <NavLinks>
                      <a href="www">Runs</a>
                    </NavLinks>
                    <NavLinks>
                      <a href="www">Webs</a>
                    </NavLinks>
                    <NavLinks>
                      <a href="www">Alones</a>
                    </NavLinks>
                    <NavLinks>
                      <a href="www">Games</a>
                    </NavLinks>
                  </NavGridLinks>
                </NavInside>
              </Nav>
            </NavWrapper>
          </Brand>
        </NavContainer>
      </HeaderInside>
    </Header>
  );
};
export default NavBar;
