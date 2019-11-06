import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Person from './Person/Person';

const Persons = (props)=>{
    //let firstPerson = useRef(null);

    useEffect(
        ()=>{
            //console.log(firstPerson.cuurent);
        }
    );

    /* let personsArray = [];
    props.persons.map(
        (person, index)=>{
           personsArray.push(<Person                            
                    ref={{index===0 ? firstPerson : 'ništa'}}
                    click={()=>props.deleteHandler(person.id)}
                    changed={props.changedHandler}
                    person={person} 
                    key={person.id}/>);
        }
    );
    console.log(personsArray); */


    return(
        <div>
        {            
            props.persons.map(
                (person, index)=>{
                    return <Person                                                        
                            click={()=>props.deleteHandler(person.id)}
                            changed={props.changedHandler}
                            person={person} 
                            key={person.id}/>
                }
            )
        }
        </div>
    );
}

Persons.propTypes = {
    deleteHandler: PropTypes.func,
    changedHandler: PropTypes.func,
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            age: PropTypes.number
        }))
};

export default Persons;