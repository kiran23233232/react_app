import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// we can write functions or classes . 
// using classes we can access the state object inside the class. 

class App extends Component {

  constructor() {

    // we know inheritance right , so now super will import all the properties and methods from the higher class it Component , so now we can set / use State object inside our App Class . 
    // we will also get set state method <setState()>from Component Class which can be used to change the state property based on some action 
    super();

    // We have used state property from the Component Class and created a key value pair , now lets display it .
    this.state = {
      string : 'hello sir'
    }



  }


  render() {

    return (
    // className is JSX property not html property which is very specific to REACT
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* writing anything between {} makes it a javascript code as shown below */}
        <p>{this.state.string}</p>
        {/* clicking the button will change the variable state value which is being displayed above */}
        {/* we dont do this.state.string = 'hello Madam' below beacuse of unidirectional flow of the react Nature, so we use setState method */}
        {/* onCLick is JSX attribute different from onclick of html attribute , so keep in mind , we can also use onclick html item but its our choice */}
        <button onClick = {() => this.setState({string:'Hello Madam'})}>Change Text</button>
        <p>
          hello_class
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>


    )



  }






}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hello
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;