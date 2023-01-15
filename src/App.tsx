import Content from "./components/Content/Content";
import ContentFooter from "./components/ContentFooter/ContentFooter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './App.css'

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
        <ContentFooter />
      </section>
      <Footer />
    </>
  );
}

export default App;
