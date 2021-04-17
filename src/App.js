import './App.css';
import { useState } from 'react';
import greed from './images/greed.png';
import glory from './images/glory.png';
import GetPin from './components/GetPin';
import Account from './classes/Account'
import AccountOptions from './components/AccountOptions'
import OpenAccount from './components/OpenAccount';

function App() {
  let accounts = new Map();
  
  const[account, setAccount] = useState(null);
  const[pin,setPin] = useState(0);
  const[menu, setMenu] = useState(0);
  const[error, setError] = useState(0);

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
      setAccount(accounts.get(pin))
      setMenu(2);
      setError(0);
    }
    else {
      setMenu(0);
      setError(1);
    }
  }

  const submitAccount = (amount) => {
    if(accounts.get(pin) != null) {
      setMenu(1);
      setError(2);
    }
    else {
      setAccount(new Account(pin, amount))
      accounts.set(pin, account);
      setMenu(2);
      setError(0);
    }
  }
  
  const signOut = () => {
    setAccount(null);
    setMenu(0);
  }

  const switchToOpenAccount = () => {
    setMenu(1);
  }

  const getMenu = () => {
    switch(menu) {
      case 0 :
        return(
          <GetPin setPin={setPin} submitPin={submitPin} switchToOpenAccount={switchToOpenAccount}/>
        );
      case 1:
        return(
          <OpenAccount setPin={setPin} signOut={signOut} submitAccount={submitAccount}/>
        )
      case 2 :
        return(
          <AccountOptions signOut={signOut}/>
        );
      default :
        return (
          <p style={{color:"red"}}>Some strange error has occurred</p>
        );
    }
  }

  const getError = () => {
    switch(error) {
      case 0: 
        break;
      case 1:
        return (
          <p style={{color:"red"}}>Invalid Pin, try again</p>
        );
      case 2:
        return (
          <p style={{color:"red"}}>Pin unavailable, try again</p>
        );
      default :
        return (
          <p style={{color:"red"}}>Some strange error has occurred</p>
        );
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
                {getError()}
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
