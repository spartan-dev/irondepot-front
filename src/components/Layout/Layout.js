import NavBar from "../commons/Navbar";
import FooterMain from "../commons/Footer";

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: "100%", padding: 0 }}>
      <NavBar />
      {children}
      <FooterMain />
    </div>
  );
};

export default Layout;
