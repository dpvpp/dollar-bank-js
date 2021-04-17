import React from 'react';

function GetPin(props) {

    const submitHandler = (event) => {
        event.preventDefault();
        props.submitPin();
    }

    const changeHandler = (event) => {
        props.setPin(event.target.value);
    }

    const switchToOpenAccount = () => {
        props.setMenu(1);
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label for="pin">Enter Pin: </label><br/>
                <input type="password" id="pin" name="pin" maxlength="4" minlength="4" 
                onChange={changeHandler} style={{width:250}}/><br/>
                <button type="button" class="btn btn-primary" style={{margin:'5px'}} onClick={switchToOpenAccount}>Open New Account</button>
                <input type="submit" class="btn btn-primary" value="Enter" style={{margin:'5px'}}/>
            </form> 
        </div>
    )

}

export default GetPin;