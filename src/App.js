import React, {Component} from 'react';
import './App.css';


import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.componet'
// Destructuring :

// import React, {Component} from 'react';
// class App extends Component {}

// No Destructuring :

// import React from 'react';
// class App extends React.Component {}


// ------------------------------------------------------------------


// // how to add SSH to github associated to email in the git bash terminal 
// run   --> ssh-keygen -t rsa -b 4096 -C "kiran.spark2323@gmail.com" 
// go to --> /c/Users/udaya_bk/.ssh
// run   --> ssh-agent
// run   --> eval `ssh-agent -s`
// run   --> ssh-add ./id_rsa

//opt >  Identity added: ./id_rsa (kiran.spark2323@gmail.com)

// now go to /c/Users/udaya_bk/.ssh and copy the contents of ./ida_rsa.pub
// paste the contents of id_rsa.pub into git hub SSH and GPG keys in the settings by clicking ADD SSH KEY 
// my-app >  git init .
// my-app > git remote add origin git@github.com:kiran23233232/react_app.git
// my-app > yarn add gh-pages
// go to packages.json and add 
// "homepage":"https://kiran23233232.github.io/react_app",
//     "predeploy":"yarn build","deploy": "gh-pages -d build"


class App extends Component {

    constructor() {

        super();

        this.state = {
            monsters: [

                {name:'fank',id: '1'},{name : 'bank',id: '2'},{name : 'rank',id: '3'}
            ],
            searchField:''
          }

// when you define a custom function in the class example handleChange() , when we refer to this keyword in the custom function handleChange then it will not work 
// to make or to align the this keyword definition to the Component Class definition , we need to write the line below 
this.handleChange = this.handleChange.bind(this);
// the above method is more comprehensive means when ever we write a new costum function ,and if we use this keyword then we need bind it to the this keyword in the constructor by writing the above line .
// how can we not write the above line and also make this keyword work in the custom function . 
// ANS : we need to write our custom function as Arrow function ie >>>> handleChange(e) => { this.setState({searchField : e.target.value},() => {console.log(this.state);}) }

// NOTE : 
// highest level of context is window object in the console
// go to console on the chrome and run >>>> const newFunc = () => console.log(this)  >>>> newFunc() 


//  lets play on these examples 

this.hc2 = this.hc1.bind(this);

    }

// You see you remember how we got the render() method by extending into Component Class.
// We also get a bunch of other methods that are called lifecycle methods.

// What are lifecycle methods?

// lifecycle methods , they're essentially methods that get called at different stages 
// of when this component gets rendered.

// lets understand --> componentDidMount :
// when component mounts meaning : mounting is essentially when react will put our component on the page or 

//Before our Component renders onto the DOM for the first time, react will call componentDidMount() method .
// so what we can do we can make the data ready in the componentDidMount() method so that data is ready for the page . 
 

    hc1() { console.log('button 1 clicked');}

    hc3 = () => { console.log('button 3 clicked');}
 
    hc4() { console.log(this);}

    componentDidMount() {

        // fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json()).then(users => console.log(users))
        fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json()).then(users => this.setState({monsters:users}))

    

    }

//  TYPE 1 : in this case you have props and props children
    // render() {

    //     return (
    //         <div className="App"> 

    //         {/* the item listed below is the card component */}
    //         {/* the key value pair defined here name='' is called as props */}
    //         {/* One of the most important property of props is children , if there is no children then props.children will be null */}
    //         {/* Children are those that you put between the  <CardList> --here-- <CardList/>*/}
    //         {/* {this.state.monsters.map(monster => <h1>{monster.name}</h1>)} */}
    //         {/* the reason why we need unique id<key={monster.id}> beacuse react needs to know what element it need to update , if there is any particular value that changes in the given the list then  to avoid rerendering everything , only changed value can be rerenderd  */}
    //         {/* NOTE > Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it) */}

    //         <CardList name='Mawa ek peg la'>
    //         {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.email}</h1>)}
    //         </CardList>
    //         </div>
    //     )


//  if you see , we are calling this.setState() method at multiple places , how about we write it only once and use it everywhere else by just using one thing 
// We can write our own method handleChange() 
// this.handleChange --> is same as   <   e => {  this.setState({searchField : e.target.value},() => {console.log(this.state);}) } >

    handleChange(e) {

// this keyword below here is undefined , so it will not work , beacuse context of this is unable to set here 
// we need to explicitly define what context it needs to be 
// so we need to define it in the constructor  beacuse the items in the constructor will run first . 
// we need to put --> 
// this.handleChange = this.handleChange.bind(this) in the constructor 
// this of component class is well defined so , in constructor the this keyword refers to the component class definiton of this , so 
// when we put the statement this.handleChange = this.handleChange.bind(this) in the constructor we are saying or binding the constructor context of this keyword to the this keyword of the handleChange . 

        this.setState({searchField : e.target.value},() => {console.log(this.state);})
    
    }

//  in this case you have only Props , no children
        render() {

        

        // what destructuring help us to do is to pull properties from object and set them to constant that we put in {}
        //  so instead of palying with the actual state , we will assign it to internal constants to this function 
        const { monsters,searchField } = this.state ; 
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        //  the above line is equivalent of saying const monsters = this.state.monsters; const searchField = this.state.searchField ;
            return (
                <div className="App"> 

                <h2> Monsters Rolodex</h2>
                {/* the input box below serves to establish a search box to search items  based on name , when ever you type then onchange event is triggered */}
                {/* We have to store the input into the SearchField item of the state so that we can propagate it across the components card , cardlist , so we can use the setState method here too*/}
                {/* if you observe , when ever you type anything you are changing the state so whole code will rerun , you will see all console logs being outputed for each type of a new character of the input */}
                <input type='search' placeholder='search monsters' 
                
                onChange={ e =>
                // PROBLEM OF TY1 : 
                // when you type first letter into the search box , you will see searchField console logged as "" empty , this is due to state is asynchronous function call    
                // asynchronous event is that which actually takes an indefinite amount of time that javascript does not know  , so the rest of the code will be running .. in the mean time if the asyncronous event finishes javascript will run the finished event . 
                // So setState will not happen immediately when we expect it to happen , 
                // the solution to that is to pass the second argument to the set state ., it is a call back that runs after the SetState is finished .  
                    {   
                        // TY1 Syntax 
                        // this.setState({searchField : e.target.value});
                        // console.log(this.state);

                        // TY2 sytax below will solve the problem of TY1 , ie to put second argument and where we can do the console log .
                        this.setState({searchField : e.target.value},() => {console.log(this.state);});

                        //  so the next thing is we dont want to put the setstate method to be called directly in the render method , we want to remove it from the render method 
                        // because when ever setstate method is called them render method will be called and everything will be rerendered , to avoid such scenarios we have to move setstate method call out of the render method
                    }
                        
                        }/>

                {/*WE CAN WRITE THE ABOVE INPUT FUNCTIONALITY BY BUILDING A COMPONENT AND USE COMPONENT FOR SEARCH FUNCTIONALITY */}
                <SearchBox 
                placeholder='search monsters' 
                handleChange={this.handleChange}/>
                {/* here we change the props item directly to state item , so that we dont need to put anything in the children area */}
                {/* We are setting here the props = {name : state[monsters] } */}
                {/* All Monsters */}
                {/* <CardList wulfa={this.state.monsters}/> */}
                {/* Filtered Monsters Based on SearchField item */}
                <CardList wulfa={filteredMonsters}/>
                
                {/* when you just refresh the browser click 1 button associated hc1() will run eventhough you did not click the click 1 button , because the render() function will run when the browser refreshes and also if there is any function call inside the render() that is hc1() , it will also automatically run  */}
                <button onClick={this.hc1()}>click 1</button>
                <button onClick={this.hc1}>click 2</button>
                <button onClick={this.hc2}>click 3</button>
                <button onClick={this.hc3}>click 4</button>
                <button onClick={this.hc4()}>click 5</button>
                <button onClick={this.hc4}>click 6</button>
                </div>

                
            )

}

}


export default App;

// NOTE 1:

// Just a quick note to remember to use the back tick  ` 
// and NOT regular single or double quotes (' and ") for string 
// interpolation on our image src. This is an easy mistake to make as 
// you cannot interpolate the strings when using regular quotes, 
// you must use back ticks!


// NOTE 2:

// We do know that our only component is the app component.
// Right.
// We've only written this one single class based component, which is our app.
// However, in REACT, what we want to do is we want to be able to break our code into smaller, reusable
// pieces that are only focused on one responsibility.

// EX 1 :

// This search bar is its own component.
// And in a way, because this card is itself, it doesn't really care about the other cards around it.
// So there's got to be something that seems to be containing every single card on our page.
// And that is going to be another component.

// Now, one of the big things about components is that they take in something called props and props is
// going to be the parameter that we get from our functional component.



// this is a special keyword in javascript that references the context in which it is being invoked . 
// this.state refers to the state on the component Class where it is called .


