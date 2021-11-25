import { GlobalStyles } from "./components/GlobalStyles";
import Rutas from "./routes";
function App({ children }) {
  return (
    <>
      <GlobalStyles />
      <Rutas />
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
