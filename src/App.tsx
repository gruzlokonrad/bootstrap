import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Menu from './Components/Menu/Menu';
import Products from './Components/Products/Products';
import Slider from './Components/Slider/Slider';
import CardBody from './Components/CardBody/CardBody';

function App() {
  return (
    <div className="App">
      <Menu />
      <Slider />
      <Products />
      <CardBody />
    </div>
  );
}

export default App;