import './App.css';
import { useState } from 'react';
import greed from './images/greed.png';
import glory from './images/glory.png';
import GetPin from './components/GetPin';
import AccountOptions from './components/AccountOptions'
import OpenAccount from './components/OpenAccount';
import Balance from './components/Balance';
import PrintTransactions from './components/PrintTransactions';
import UpdatePin from './components/UpdatePin';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';

function App() {

  const[accounts, setAccounts] = useState(new Map([
    ['1234', { pin: '1234', balance: 1234, transactions: ["Initial Deposit: $" + 1234 + " " + new Date()]}],
    ['1111', { pin: '1111', balance: 1111, transactions: ["Initial Deposit: $" + 1111 + " " + new Date()]}],
    ['2222', { pin: '2222', balance: 2341234, transactions: ["Initial Deposit: $" + 1232 + " " + new Date()]}],
    ['3333', { pin: '3333', balance: 23423, transactions: ["Initial Deposit: $" + 1232 + " " + new Date()]}],
    ['4444', { pin: '4444', balance: 1231, transactions: ["Initial Deposit: $" + 1232 + " " + new Date()]}],
    ['5555', { pin: '5555', balance: 13412, transactions: ["Initial Deposit: $" + 1232 + " " + new Date()]}]
  ]));
  const[account, setAccount] = useState({});
  const[pin,setPin] = useState(0);
  const[menu, setMenu] = useState(0);
  const[error, setError] = useState(0);
  const[success, setSuccess] = useState(0);

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

  const submitPinForChange = () => {
    if(accounts.get(pin) != null) {
      setMenu(5);
      setError(2);
      setSuccess(0);
    }
    else {
      let update = accounts;
      update.delete(account.pin);
      setAccounts(update);
      setAccounts(new Map(accounts.set(pin, {pin: pin, balance: account.balance, transactions: account.transactions})));
      setAccount({pin: pin, balance: account.balance, transactions: account.transactions})
      setMenu(5);
      setError(0);
      setSuccess(1);
    }
  }

  const submitAccount = (amount) => {
    if(accounts.get(pin) != null) {
      setMenu(1);
      setError(2);
    }
    else {
      setAccount({pin: pin, balance: amount, transactions: ["Initial Deposit: $" + amount + " " + new Date()]});
      setAccounts(new Map(accounts.set(pin, {pin: pin, balance: amount, transactions: ["Initial Deposit: $" + amount + " " + new Date()]})));
      setMenu(2);
      setError(0);
    }
  }
  
  const submitWithdrawal = (amount) => {
    if(account.balance < amount) {
      setMenu(6);
      setError(3);
      setSuccess(0);
    }
    else {
      let update = {pin: account.pin, balance: account.balance, transactions: account.transactions};
      update.balance = (parseFloat(update.balance) - parseFloat(amount)).toFixed(2);
      update.transactions.push("Withdrawal: $" + amount + " " + new Date())
      
      setAccount(update);
      setAccounts(new Map(accounts.set(update.pin, update)));

      setMenu(6);
      setError(0);
      setSuccess(1);
    }
  }

  const submitDeposit = (amount) => {

    let update = {pin: account.pin, balance: account.balance, transactions: account.transactions};
    update.balance = (parseFloat(update.balance) + parseFloat(amount)).toFixed(2);
    update.balance.toFixed(2);
    update.transactions.push("Deposit: $" + amount + " " + new Date())
      
    setAccount(update);
    setAccounts(new Map(accounts.set(update.pin, update)));

    setMenu(7);
    setError(0);
    setSuccess(1);

  }

  const signOut = () => {
    setAccount(null);
    setMenu(0);
    setError(0);
  }


  const getMenu = () => {
    switch(menu) {
      case 0 :
        return(
          <GetPin setPin={setPin} submitPin={submitPin} setMenu={setMenu} setError={setError}/>
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
      case 5 : 
        return(
          <UpdatePin setPin={setPin} setMenu={setMenu} setError={setError} setSuccess={setSuccess} submitPinForChange={submitPinForChange}/>
        )
      case 6 : 
        return(
          <Withdraw balance={account.balance} setMenu={setMenu} setError={setError} setSuccess={setSuccess} submitWithdrawal={submitWithdrawal}/>
        )
      case 7 : 
        return(
          <Deposit balance={account.balance} setMenu={setMenu} setError={setError} setSuccess={setSuccess} submitDeposit={submitDeposit}/>
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
      case 3:
        return (
          <p style={{color:"red"}}>Cannot withdraw more than current balance</p>
        );
      default :
        return (
          <p style={{color:"red"}}>Some strange error has occurred</p>
        );
    }
  }

  const getSuccess = () => {
    switch(success) {
      case 0: 
        break;
      case 1:
        return (
          <p style={{color:"green"}}>Great Success!</p>
        );
      default :
        return (
          <p style={{color:"red"}}>Some strange success has occurred</p>
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
                {getSuccess()}
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
