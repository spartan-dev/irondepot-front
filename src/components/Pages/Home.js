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
      <Card>
        <TextGlow> Texto Gradientre con mezcal </TextGlow>
      </Card>
      <BgCard>Una Crad con gradiente</BgCard>
    </div>
  );
};

export default Home;
