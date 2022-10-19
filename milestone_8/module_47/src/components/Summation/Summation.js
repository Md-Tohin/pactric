import React from 'react';
import {summation} from '../../utilities/Calculation'

const Summation = () => {
    const result = summation(5, 2);
    return (
        <div>
            <h1>This is Calculation Page</h1>
            <p>Result is: {result}</p>
        </div>
    )
}

export default Summation;