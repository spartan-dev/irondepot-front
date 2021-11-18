import {
  FooterContainer,
  FooterNavigation,
  Footerbody,
  Footer,
  SecondListNav,
  SocialMediaIcons,
} from "./footer_styles";

const FooterMain = () => {
  return (
    <FooterContainer>
      <Footer>
        <Footerbody>
          <FooterNavigation>
            <ul>
              <li>
                <a href="www">Graph</a>
              </li>
              <li>
                <a href="www">Blog</a>
              </li>
              <li>
                <a href="www">Docs</a>
              </li>
              <li>
                <a href="www">Security</a>
              </li>
              <li>
                <a href="www">Jobs</a>
              </li>
            </ul>
            <SecondListNav>
              <li>
                <a href="www">IronHack</a>
              </li>
              <li>
                <a href="www">Courses</a>
              </li>
              <li>
                <a href="www">Forum</a>
              </li>
              <li>
                <a href="www">Test</a>
              </li>
              <li>
                <a href="www">Partnerships</a>
              </li>
              <li>
                <a href="www">Privacy</a>
              </li>
              <li>
                <a href="www">Terms of use</a>
              </li>
            </SecondListNav>
          </FooterNavigation>
          <SocialMediaIcons>
            <li>
              <a href="www">
                <img src="" alt="" />
              </a>
              <a href="www">
                <img src="" alt="" />
              </a>
              <a href="www">
                <img src="" alt="" />
              </a>
              <a href="www">
                <img src="" alt="" />
              </a>
              <a href="www">
                <img src="" alt="" />
              </a>
              <a href="www">
                <img src="" alt="" />
              </a>
            </li>
          </SocialMediaIcons>
        </Footerbody>
      </Footer>
    </FooterContainer>
  );
};

export default FooterMain;
