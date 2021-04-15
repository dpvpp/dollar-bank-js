import './App.css';
import greed from './images/greed.png';
import glory from './images/glory.png';
import GetPin from './components/GetPin';

function App() {
  return (
    <div>
      <div class="container">
        <div class="text-center">
          <div class="row">
            <div class="col">
              <h1 style={{color:'white',backgroundColor: 'green'}}>Dollars Bank ATM</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img alt="Greed" src={greed} class="img-fluid rounded float-end"/>
            </div>
            <div class="col">
              <GetPin />
            </div>
            <div class="col">
              <img alt="Glory" src={glory} class="img-fluid rounded float-start"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
