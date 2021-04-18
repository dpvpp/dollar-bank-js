import React, { useState } from 'react';

function Deposit(props) {

    const[amount, setAmount] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
        props.submitDeposit(amount);
    }

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const back = () => {
        props.setMenu(2);
        props.setError(0);
        props.setSuccess(0);
    }

    return(
        <div>
            <h1>Deposit</h1>
            <h5>Available Balance: ${props.balance}</h5>
            <form onSubmit={submitHandler}>

                <label for="deposit">Enter Amount to Deposit: </label><br/>
                <input type="number" id="deposit" name="deposit" min="0" step="0.01"
                onChange={amountHandler} value={amount} style={{width:200}} required/><br/>
                
                <button type="button" class="btn btn-primary" style={{margin:'5px'}} onClick={back}>Back</button>
                <input type="submit" class="btn btn-primary" value="Submit" style={{margin:'5px'}}/>

            </form> 
        </div>
    )

}

export default Deposit