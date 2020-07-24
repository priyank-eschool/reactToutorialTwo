import React , {Component}  from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';


class App extends Component{

  state={ persons:[
                    {id:1,name:"Priyank",age:30},
                    {id:2,name:"Rajeev",age:29},
                    {id:3,name:"Manish",age:31}
                  ],
          other:"other",
          showPerson:false
        }

  switchNameHandler=()=>{
    console.log("-----------aa--------------");
    console.log(this);
    this.setState(
      { persons:[
        {id:1,name:"Priyank Sinha",age:30},
        {id:2,name:"Rajeev",age:29},
        {id:3,name:"Manish",age:31}
      ]
     }

    );
  }

  changeNameHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    
    const person={...this.state.persons[personIndex]};

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons});
  }

 deletePersonHandler=(personIndex)=>{

  const person=this.state.persons;
  person.splice(personIndex,1);
  this.setState({persons:person});
 }

  togglePersonHandler=()=>{
    this.setState({showPerson:!this.state.showPerson})
  }
  render(){
    
let persons = null;
console.log("+++++++++++++++++++++++++++++++++++++++++++");
if(this.state.showPerson){
  persons=(
          <div>
             <Persons
                 persons={this.state.persons}
                 change={this.changeNameHandler}
                 delete={this.deletePersonHandler}
             />
          </div>
  ); 
}
  return (
    <div className="App">
      <Cockpit 
      showPerson={this.state.showPerson}
      switchNameHandler={this.switchNameHandler}
      togglePersonHandler={this.togglePersonHandler}
      persons={this.state.persons}
      />
     { persons }
    </div>
  );
}
}
export default App;