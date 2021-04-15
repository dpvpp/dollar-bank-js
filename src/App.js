import './App.css';
import greed from './images/greed.png'
import glory from './images/glory.png'

function App() {
  return (
    <div>
      <div class="container">
        <div class="text-center">
          <div class="row">
            <div class="col-sm">
              <h1>Dollars Bank ATM</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <img alt="Greed" src={greed} class="rounded float-end"/>
            </div>
            <div class="col-sm">
              <form>
                <label for="pin">Enter Pin: </label><br/>
                <input type="password" id="pin" name="pin" maxlength="4" /><br/>
                <input type="submit" class="btn btn-primary" value="Enter"/>
              </form> 
            </div>
            <div class="col-sm">
              <img alt="Glory" src={glory} class="rounded float-start"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
