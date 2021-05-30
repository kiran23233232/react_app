import React from 'react' ;

import './search-box.styles.css'

// what is a functional component 

// functional component dont have access to state ,beacuse they dont have access to the constructor because they dont have access to class constructor . 
// thye also dont have access to the life cycle methods . 
// this does not affect us much because sometimes we just want to render some html tags 

// So functional component is something that just gets some props and return html elements . 

export const SearchBox = ({placeholder,handleChange}) => {

    return <input 
    
    className='search'
    
    type='search' placeholder={placeholder}
                
    onChange={ 
    // PROBLEM OF TY1 : 
    // when you type first letter into the search box , you will see searchField console logged as "" empty , this is due to state is asynchronous function call    
    // asynchronous event is that which actually takes an indefinite amount of time that javascript does not know  , so the rest of the code will be running .. in the mean time if the asyncronous event finishes javascript will run the finished event . 
    // So setState will not happen immediately when we expect it to happen , 
    // the solution to that is to pass the second argument to the set state ., it is a call back that runs after the SetState is finished .  
        
            // TY1 Syntax 
            // this.setState({searchField : e.target.value});
            // console.log(this.state);

            // TY2 sytax below will solve the problem of TY1 , ie to put second argument and where we can do the console log .
            // this.setState({searchField : e.target.value},() => {console.log(this.state);});
            // TY 3 
            handleChange
            //  so the next thing is we dont want to put the setstate method to be called directly in the render method , we want to remove it from the render method 
            // because when ever setstate method is called them render method will be called and everything will be rerendered , to avoid such scenarios we have to move setstate method call out of the render method
        }
            
            /> ;
}