
import './App.css';
import {Greet} from "./Components/Greet"
import Heading from './Components/Heading';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import Status from './Components/Status';
import Oscar from './Components/Oscar';
import Button from "./Components/Button"
import Input from './Components/Input';
import User from './Components/state/User';
import DomRef from './Components/refs/DomRef';
import MutableRef from './Components/refs/MutableRef';
import Counter from './Components/class/Counter';
import { Private } from './Components/auth/Private';
import Profile from './Components/auth/Profile';

function App() {
  const personName={
    first:"aditya",
    last:"dond"
  }

  const nameList=[{
    first:"aditya",
    last:"dond"
  },
  {
    first:"aditya",
    last:"dond"
  },
  {
    first:"aditya",
    last:"dond"
  },
]
  return (
    <div className="App">
      <Greet name="Aditya" messageCount={20} isLogged={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder</Heading>
      <h1>-----------------------------</h1>
      <Oscar>
        <Heading>Ocara to leoanardo</Heading>
      </Oscar>
      <h1>-----------------------------</h1>
      <Greet name="Aditya" isLogged={true}/>
      <h1>-----------------------------</h1>
      <Button handleClick={()=>{
        alert("Button Click")
      }}/>
      <h1>-----------------------------</h1>
      <Button handleClick={(event)=>{
        console.log("Button Click",event)
      }}/>
      <h1>-----------------------------</h1>
      <Input value="" handleChange={(event)=>event.target.value}/>
      <h1>-----------------------------</h1>
      <User/>
      <h1>-----------------------------</h1>
      <DomRef/>
      <h1>-----------------------------</h1>
      <MutableRef/>
      <h1>-----------------------------</h1>
      <Counter message="count value is"/>
      <h1>-----------------------------</h1>
      <Private isLoggedIn={true} component={Profile}/>
    </div>
    
  );
}

export default App;
