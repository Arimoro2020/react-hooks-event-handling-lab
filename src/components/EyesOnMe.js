// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(props) {
   
    


    return(

        <div>
            <button type='button' onFocus={() =>console.log('Good!')} 
            onBlur={() =>console.log('Hey! Eyes on me!')}>Eyes on me</button>
        </div>
    )


}

export default EyesOnMe;