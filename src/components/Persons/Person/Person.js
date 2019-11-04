import React from 'react';

import classes from './Person.module.css';

const Person = ( props ) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.person.name} and I am {props.person.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={(event)=>props.changed(event.target.value, props.person.id)} value={props.person.name} />
        </div>
    )
};

export default Person;