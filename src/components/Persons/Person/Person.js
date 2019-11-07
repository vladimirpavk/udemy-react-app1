import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

import classes from './Person.module.css';

const Person = ( props ) => {
    let inputButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(
        ()=>{
            //console.log(inputButtonRef);
            inputButtonRef.current.focus();
        }
    );

    return (
        <div className={classes.Person}>
            {
                authContext.isAuthenticated ? <p>User is logged in...</p> : <p>User is not logged in...</p>
            }          
            <p onClick={props.click}>I'm {props.person.name} and I am {props.person.age} years old!</p>
            <p>{props.children}</p>
            <input
                ref={inputButtonRef}
                type="text"
                onChange={(event)=>props.changed(event.target.value, props.person.id)}
                value={props.person.name}                
            />
        </div>    
    );
};

Person.propTypes = {
    click: PropTypes.func,   
    changed: PropTypes.func,
    person: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        age: PropTypes.number
    })
};

export default Person;