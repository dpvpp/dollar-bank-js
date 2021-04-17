import React from 'react'

function Balance(props) {

    const back = () => {
        props.setMenu(2);
    }

    return (
        <div>
            <h1>Current Balance</h1>
            <h3>${props.balance}</h3>
            <button type="button" class="btn btn-primary" style={{margin:'5px'}} onClick={back}>Back</button>
        </div>
    )

}

export default Balance;