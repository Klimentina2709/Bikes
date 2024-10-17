import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProductPage from "./components/ParentFilter";

function App() {
  return (
    <>
      <Header />
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;
