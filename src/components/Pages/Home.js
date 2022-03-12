import { TextGlow, TextGradient } from "../uikit/Text";
import { Link } from "react-router-dom";
/* import {
  Button,
  PrimaryButton,
  TransparentButton,
  GradientBorderButton,
  GradientBackground,
} from "../uikit/Button"; */
import { BgCard } from "../uikit/Card";

const Home = () => {
  return (
    <div>
      <TextGlow>
        {" "}
        <TextGradient>Super IronHack modules Central </TextGradient>
        Intertgalactic trade center
      </TextGlow>
      <div className="container-main-card">
        <Link to="/mexicopart_time" style={{ textDecoration: "none" }}>
          {" "}
          <BgCard transBack>Mexico Part Time</BgCard>
        </Link>
        <Link to="/mexicofull_time" style={{ textDecoration: "none" }}>
          {" "}
          <BgCard transBack>Mexico Full Time</BgCard>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
