import { Component } from 'react';
import './App.css';
import DataFetching from './Components/DataFetching';
import LifecycleA from './Components/LifecycleA';


// Assignments 1
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World !</h1>
//     </div>
//   );
// }

// Assignments 2

// class App extends Component{
//   render(){
//     return <h1>Hello World ??</h1>
//   }
// }

// Assignments 3

// function Hello(props){
//   return <h1>Hi,my name is {props.name} age : {props.age}</h1>
// }

// function App() {
//     return (
//       <div>
//       <Hello name="Sara" age="20" />
//       <Hello name="Cahal" age="10"/>
//       <Hello name="Edite" age="30"/>
//       </div>
//     );
//   }

// class App extends Component{
//     render(){
//         return (
//           <div>
//           <Hello name="Sara" age="20" />
//           <Hello name="Cahal" age="10"/>
//           <Hello name="Edite" age="30"/>
//           </div>
//         );
//       }
// }

// Assignments 4

// function Clock(props) {
//   return (
//     <div>
//       <h1>Welcome</h1>
//       <h2>Time is {props.dat.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }


// function App() {
//     return (
//       <Clock dat={new Date()} />
//     );
//   }

// Assignments 5

// Look file components LifecycleA and LifecycleB

// class App extends Component {
//   render(){    
//     return (
//         <div className="App">
//           <LifecycleA />
//         </div>
//         );
//   }
// }

// Assignments 6

function App() {
  return (
    <div>
        <DataFetching />      
    </div>
  )
}

export default App;
