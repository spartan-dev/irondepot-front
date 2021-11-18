import { GlobalStyles } from "./components/GlobalStyles";
import NavBar from "./components/commons/Navbar";
import Layout from "./components/Layout/";
import { TextGlow, TextGradient } from "./components/uikit/Text";
import {
  Button,
  PrimaryButton,
  TransparentButton,
  GradientBorderButton,
  GradientBackground,
} from "./components/uikit/Button";
import { Card, BgCard } from "./components/uikit/Card";
function App({ children }) {
  return (
    <>
      <GlobalStyles />
      <Layout>{children}</Layout>

      {/* <TextGlow>Un estilo unico con efecto</TextGlow>
      <TextGradient>Un solo texto con gradiente</TextGradient>
      <TextGlow>
        {" "}
        <TextGradient> Texto Gradientre con mezcal </TextGradient> Con solo glow
        efectto
      </TextGlow>
     
      <Button glow>boton normal</Button>
      <PrimaryButton glow>Boton primario</PrimaryButton>
      <TransparentButton glow>boton transparente</TransparentButton>
      <GradientBackground glow>Con gradiente</GradientBackground>
      <GradientBorderButton glow>Boton con gradiente</GradientBorderButton>
      <Card>Una card simple</Card>
      <BgCard>Una Crad con gradiente</BgCard> */}
    </>
  );
}

export default App;
