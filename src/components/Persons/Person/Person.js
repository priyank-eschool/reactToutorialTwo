import React from 'react';
import styled from 'styled-components';


const StyledDiv=styled.div`
    width: 60%;
    margin: 16px;
    border: red solid 1px;
    background-color: seashell;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px){
        width: 450px;
    }
`


const person = (props)=>{

   
    return (
        <StyledDiv>
            <h1 onClick={props.click}>My Name is {props.name} and age is {props.age}.{props.children}</h1>
            <input type="text" onChange={props.changeName} value={props.name} />
       </StyledDiv>
    )
};

export default person;