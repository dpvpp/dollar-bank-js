import React, { useState } from 'react';

function OpenAccount(props) {

    const[amount, setAmount] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
        props.submitAccount(amount);
    }

    const pinHandler = (event) => {
        props.setPin(event.target.value);
    }

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label for="pin">Enter Pin: </label><br/>
                <input type="password" id="pin" name="pin" maxlength="4" minlength="4" 
                onChange={pinHandler} style={{width:200}}/><br/>
                <label for="init">Enter Initial Deposit: </label><br/>
                <input type="number" id="init" name="init" min="0"
                onChange={amountHandler} value={amount} style={{width:200}}/><br/>
                <button type="button" class="btn btn-primary" style={{margin:'5px'}} onClick={props.signOut}>Cancel</button>
                <input type="submit" class="btn btn-primary" value="Submit" style={{margin:'5px'}}/>
            </form> 
        </div>
    )

}

export default OpenAccount;