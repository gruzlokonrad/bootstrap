import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Menu from './Components/Menu/Menu';
import Products from './Components/Products/Products';
import Slider from './Components/Slider/Slider';
import CardBody from './Components/CardBody/CardBody';
import BenefitsCard from './Components/BenefitsCard/BenefitsCard';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Slider />
      <Products />
      <CardBody />
      <BenefitsCard />
      <Footer />
    </div>
  );
}

export default App;