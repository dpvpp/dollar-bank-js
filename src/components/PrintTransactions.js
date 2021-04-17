import React from 'react'

function PrintTransactions(props) {

    const back = () => {
        props.setMenu(2);
    }

    return (
        <div>
            <h1>Transactions</h1>
            {props.transactions.map((trans, index) => 
                <p>{index + 1}. {trans}</p>
            )}
            <button type="button" class="btn btn-primary" style={{margin:'5px'}} onClick={back}>Back</button>
        </div>
    )

}

export default PrintTransactions;