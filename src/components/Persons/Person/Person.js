import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

import classes from './Person.module.css';

const Person = ( props ) => {
    let inputButtonRef = useRef(null);

    useEffect(
        ()=>{
            //console.log(inputButtonRef);
            inputButtonRef.current.focus();
        }
    );

    return (
        <AuthContext.Cosumer>
            {
                (context)=>{
                    <div className={classes.Person}>
                        <p onClick={props.click}>I'm {props.person.name} and I am {props.person.age} years old!</p>
                        <p>{props.children}</p>
                        <input
                            ref={inputButtonRef}
                            type="text"
                            onChange={(event)=>props.changed(event.target.value, props.person.id)}
                            value={props.person.name}                
                        />
                    </div>
                }
            }
        </AuthContext.Cosumer>        
    )
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