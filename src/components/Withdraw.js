import React, { useState } from 'react';

function Withdraw(props) {

    const[amount, setAmount] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
        props.submitWithdrawal(amount);
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
            <h1>Withdraw</h1>
            <h5>Available Balance: ${props.balance}</h5>
            <form onSubmit={submitHandler}>

                <label for="init">Enter Amount to Withdraw: </label><br/>
                <input type="number" id="init" name="init" min="0"
                onChange={amountHandler} value={amount} style={{width:200}} required/><br/>
                
                <button type="button" class="btn btn-primary" style={{margin:'5px'}} onClick={back}>Back</button>
                <input type="submit" class="btn btn-primary" value="Submit" style={{margin:'5px'}}/>

            </form> 
        </div>
    )

}

export default Withdraw;