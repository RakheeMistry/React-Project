import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Loan from './components/loan/Loan';
import MainContent from './components/maincontent/MainContent';
import LifeCycleMethod from './components/LifeCycleMethod';
function App() {
  return (
    <div className="App">
      <Header/>
      <Loan/>
      <LifeCycleMethod/>
      <MainContent/>
      <Footer bgColor="bg-success" active="true"/>
    </div>
  );
}

export default App;
