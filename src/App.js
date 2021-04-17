import './App.css';
import { useState } from 'react';
import greed from './images/greed.png';
import glory from './images/glory.png';
import GetPin from './components/GetPin';
import AccountOptions from './components/AccountOptions'
import OpenAccount from './components/OpenAccount';
import Balance from './components/Balance';
import PrintTransactions from './components/PrintTransactions';

function App() {

  const[accounts, setAccounts] = useState(new Map([
    ['1234', { pin: '1234', balance: 1234, transactions: ["Initial Deposit: " + 1234 + " " + new Date()]}],
    ['1111', { pin: '1111', balance: 1111, transactions: ["Initial Deposit: " + 1111 + " " + new Date()]}],
    ['2222', { pin: '2222', balance: 1232, transactions: ["Initial Deposit: " + 1232 + " " + new Date()]}],
    ['3333', { pin: '2222', balance: 1232, transactions: ["Initial Deposit: " + 1232 + " " + new Date()]}],
    ['4444', { pin: '2222', balance: 1232, transactions: ["Initial Deposit: " + 1232 + " " + new Date()]}],
    ['5555', { pin: '2222', balance: 1232, transactions: ["Initial Deposit: " + 1232 + " " + new Date()]}]
  ]));
  const[account, setAccount] = useState(null);
  const[pin,setPin] = useState(0);
  const[menu, setMenu] = useState(0);
  const[error, setError] = useState(0);

  const updateAccounts = (k,v) => {
    setAccounts(new Map(accounts.set(k, v)));
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
      setAccount({pin: pin, balance: amount, transactions: ["Initial Deposit: " + amount + " " + new Date()]})
      updateAccounts(pin, account);
      setMenu(2);
      setError(0);
    }
  }
  
  const signOut = () => {
    setAccount(null);
    setMenu(0);
  }


  const getMenu = () => {
    switch(menu) {
      case 0 :
        return(
          <GetPin setPin={setPin} submitPin={submitPin} setMenu={setMenu}/>
        );
      case 1:
        return(
          <OpenAccount setPin={setPin} signOut={signOut} submitAccount={submitAccount} />
        )
      case 2 :
        return(
          <AccountOptions signOut={signOut} setMenu={setMenu}/>
        );
      case 3 : 
        return(
          <Balance balance={account.balance} setMenu={setMenu}/>
        )
      case 4 : 
        return(
          <PrintTransactions transactions={account.transactions} setMenu={setMenu} />
        )
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
