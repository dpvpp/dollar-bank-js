import React from 'react';

function GetPin(props) {

    const submitHandler = (event) => {
        event.preventDefault();
        props.submitPin();
    }

    const changeHandler = (event) => {
        props.setPin(event.target.value);
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label for="pin">Enter Pin: </label><br/>
                <input type="password" id="pin" name="pin" maxlength="4" minlength="4" 
                onChange={changeHandler}/><br/>
                <input type="submit" class="btn btn-primary" value="Enter"/>
            </form> 
        </div>
    )

}

export default GetPin;