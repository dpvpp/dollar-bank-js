import React from 'react';

function GetPin() {

    return(
        <form>
            <label for="pin">Enter Pin: </label><br/>
            <input type="password" id="pin" name="pin" maxlength="4" /><br/>
            <input type="submit" class="btn btn-primary" value="Enter"/>
        </form> 
    )

}

export default GetPin;