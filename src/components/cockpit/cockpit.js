import React  from 'react';
import styled from 'styled-components';
import './cockpit.css';

// it is a css code
const StyledButton=styled.button`
      background-color: ${props=> props.alt ? 'red' : 'green'};
      border: 1px solid blue;
      padding: 8px;


      &:hover{
        background-color : ${props=> props.alt ? 'salmon' : 'lightgreen'};;
        color:black;
      }
`

const cockpit = (props)=>{

    const classess=[];
if(props.persons.length<=2){
  classess.push('red');
}
if(props.persons.length<=1){
  classess.push('bold');
}


    return(
<div>
    <p className={classess.join(' ')}>Hi, I am React App</p>
    <StyledButton key="B1" alt={props.showPerson} onClick={props.switchNameHandler} >Switch Name</StyledButton>
    <StyledButton alt={props.showPerson}  key="B2" onClick={props.togglePersonHandler} >Toggle Name</StyledButton>
</div>    
    );
};

export default cockpit;