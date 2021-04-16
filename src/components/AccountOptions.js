import React from 'react';

function AccountOptions(props) {

    const submitHandler = (event) => {
        event.preventDefault();
        props.submitPin();
    }

    const changeHandler = (event) => {
        props.setPin(event.target.value);
    }

    return(
        <div>
            <h1>Welcome!</h1>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Check Balance</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Print Transactions</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Update Pin</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Withdraw Amount</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Deposit Amount</button>
        </div>
    )

}

export default AccountOptions;