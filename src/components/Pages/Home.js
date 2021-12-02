import { TextGlow, TextGradient } from "../uikit/Text";
import {
  Button,
  PrimaryButton,
  TransparentButton,
  GradientBorderButton,
  GradientBackground,
} from "../uikit/Button";
import { Card, BgCard } from "../uikit/Card";

const Home = () => {
  return (
    <div>
      <TextGlow>
        {" "}
        <TextGradient> Texto Gradientre con mezcal </TextGradient> Con solo glow
        efectto
      </TextGlow>
      <div className="container-main-card">
        <BgCard>Mexico Part Time</BgCard>
        <BgCard>Mexico Full Time</BgCard>
      </div>
    </div>
  );
};

export default Home;
