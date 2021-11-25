import {
  FooterContainer,
  FooterNavigation,
  Footerbody,
  Footer,
  FirstLinks,
  SecondListNav,
  SocialMediaIcons,
  SeconLinks,
} from "./footer_styles";

const FooterMain = () => {
  return (
    <FooterContainer>
      <Footer>
        <Footerbody>
          <FooterNavigation>
            <FirstLinks>
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
            </FirstLinks>
            <SecondListNav>
              <SeconLinks>
                <a href="www">IronHack</a>
              </SeconLinks>
              <SeconLinks>
                <a href="www">Courses</a>
              </SeconLinks>
              <SeconLinks>
                <a href="www">Forum</a>
              </SeconLinks>
              <SeconLinks>
                <a href="www">Test</a>
              </SeconLinks>
              <SeconLinks>
                <a href="www">Partnerships</a>
              </SeconLinks>
              <SeconLinks>
                <a href="www">Privacy</a>
              </SeconLinks>
              <SeconLinks>
                <a href="www">Terms of use</a>
              </SeconLinks>
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
