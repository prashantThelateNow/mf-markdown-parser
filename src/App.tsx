import "./App.css";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Content>
        <Footer />
      </Content>
    </>
  );
}

export default App;
