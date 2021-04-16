import './App.css';
import greed from './images/greed.png';
import glory from './images/glory.png';
import GetPin from './components/GetPin';
import { useState } from 'react';
import Account from './classes/Account'
import AccountOptions from './components/AccountOptions'

function App() {
  let accounts = new Map();
  const[pin,setPin] = useState(0);
  const[menu, setMenu] = useState(0)

  const addAccounts = () => {
    accounts.set('1234', new Account('1234', 1234))
    accounts.set('1111', new Account('1111', 1111))
    accounts.set('1122', new Account('1122', 1232))
    accounts.set('3333', new Account('3333', 13234))
    accounts.set('4444', new Account('4444', 4444))
    accounts.set('5555', new Account('5555', 5555))
  }

  const submitPin = () => {
    if(accounts.get(pin) != null) {
      setMenu(1);
    }
    else {
      getMenu();
    }
  }

  const getMenu = () => {
    switch(menu) {
      case 0 :
        return(
          <GetPin setPin={setPin} submitPin={submitPin}/>
        );
      case 1 :
        return(
          <AccountOptions />
        );
      default :
        return (
          <h1>Some strange error has occurred</h1>
        )
    }
  }

  return (
    <div>
        {addAccounts()}
        <div class="text-center">
          <h1 style={{color:'white',backgroundColor: 'green'}}>Dollars Bank ATM</h1>
          <div class="container">  
            <div class="row">
              <div class="col">
                <img alt="Greed" src={greed} class="img-fluid rounded float-end"/>
              </div>
              <div class="col">
                {getMenu()}
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
