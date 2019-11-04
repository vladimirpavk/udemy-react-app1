import React from 'react';
import Person from './Person/Person';

const Persons = (props)=>{
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
    )
}

export default Persons;