import React from 'react';
import {multiply} from '../../utilities/Calculation'

const Multiply = () => {
    const result = multiply(5, 2);
    return(
        <div>
            <h1>This is Calculation Page</h1>
            <p>Result is: {result}</p>
        </div>
    )
}

export default Multiply;