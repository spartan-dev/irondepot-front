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
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Header>
      <HeaderInside>
        <NavContainer>
          <Brand>
            <NavWrapper>
              <Link to="/" style={{ marginRight: "1.5em" }}>
                <img
                  width={80}
                  heigth={80}
                  src="https://building.co/wp-content/uploads/2017/01/ironhack-logo.png"
                  alt="ironhack logo"
                />
              </Link>
              <Nav>
                <NavInside>
                  <NavGridLinks>
                    <NavLinks>
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <span>Home</span>
                      </Link>
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
