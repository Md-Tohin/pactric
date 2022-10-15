import React from 'react';
import "./Common.css";

const Common = () => {
    return (
        <div>
            <SectionTitle name="Post"></SectionTitle>
        </div>
    );
};

function SectionTitle(props) {
    const { name } = props;
    return (
        <div className='section-title'>
            <h1>All {name} Here....</h1>
        </div>
    )
}

export default Common;