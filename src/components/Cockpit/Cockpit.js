import React from 'react';

const Cockpit = (props)=>{
    return (
        <div>
            <h1>{props.appName}</h1>
            <p className={props.paragraphClassName}>This is really working!</p>
            <button
                className={props.buttonClassName}
                onClick={props.click}>Toggle Persons</button>
        </div>
    );
}

export default Cockpit;