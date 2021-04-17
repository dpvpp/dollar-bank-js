import React from 'react';

function AccountOptions(props) {

    return(
        <div>
            <h1>Welcome!</h1>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Check Balance</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Print Transactions</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Update Pin</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Withdraw Amount</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}}>Deposit Amount</button>
            <button type="button" class="btn btn-primary" style={{margin:'5px', width: 200}} onClick={props.signOut}>Sign out</button>
        </div>
    )

}

export default AccountOptions;