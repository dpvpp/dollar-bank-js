import React from 'react';

function AccountOptions(props) {
    
    const viewBalance = () => {
        props.setMenu(3);
    }

    const viewTransactions = () => {
        props.setMenu(4);
    }

    const updatePin = () => {
        props.setMenu(5);
    }

    const withdraw = () => {
        props.setMenu(6);
    }

    const deposit = () => {
        props.setMenu(7);
    }

    return(
        <div>
            <h1>Welcome!</h1>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}} onClick={viewBalance}>Check Balance</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}} onClick={viewTransactions}>Print Transactions</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}} onClick={updatePin}>Update Pin</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}} onClick={withdraw}>Withdraw Amount</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}} onClick={deposit}>Deposit Amount</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}} onClick={props.signOut}>Sign out</button>
        </div>
    )

}

export default AccountOptions;