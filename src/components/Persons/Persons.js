import React from 'react';

import Person from './Person/Person';

const persons=(props)=>(
    props.persons.map((person,index)=>{
        return <Person 
                name={person.name}
                age={person.age}
                changeName={(event)=>props.change(event,person.id)}
                click={()=>props.delete(index)}
                key={person.id}
                />
      })
);

export default persons;