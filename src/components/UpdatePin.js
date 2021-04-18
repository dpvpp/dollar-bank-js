import React from 'react';

function UpdatePin(props) {

    const submitHandler = (event) => {
        event.preventDefault();
        props.submitPinForChange();
    }

    const changeHandler = (event) => {
        props.setPin(event.target.value);
    }

    const cancel = () => {
        props.setMenu(2);
        props.setError(0);
        props.setSuccess(0);
    }

    return(
        <div>
            <h1>Pin Update</h1>
            <form onSubmit={submitHandler}>

                <label for="pin">Enter New Pin: </label><br/>
                <input type="password" id="pin" name="pin" maxlength="4" minlength="4" 
                onChange={changeHandler} style={{width:200}} required/><br/>

                <button type="button" class="btn btn-primary" style={{margin:'5px'}} onClick={cancel}>Cancel</button>
                <input type="submit" class="btn btn-primary" value="Submit" style={{margin:'5px'}}/>

            </form> 
        </div>
    )

}

export default UpdatePin;