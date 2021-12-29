import React, { Component } from 'react';

class Counter extends React.Component {

    state = {
        count:0,
        imagesrc:"https://picsum.photos/200",
        address:{
            street:''
        }
    };

    render() { 
        //return <h1>Hello World</h1>;

        //return <button>Hello</button>;


        // create an element 
        React.createElement('h1')


        // creating enums //


        return(<React.Fragment>
            
            { /* <img src={this.state.imagesrc}></img> */ }
            { /* we cannot use the keyword as class  */}
            <span className = "badge badge-primary"> { this.formatCount()}</span>
            { /*<h1>Hello World</h1> */}
            <button>Increment</button>
            <span>{this.state.count}</span>
            
            {/* <span>{2+2}</span>

            <span>{2*2}</span>

        <span>{2-2}</span> */}
        </React.Fragment>
        );


    }

    formatCount(){
        const {count} = this.state;
        
        return this.state.count === 0 ? 'Zero' :this.state.count;

        // after writing const { count} = this.state;

        return count === 0 ? "Zero" : count;

    }
}
 
export default Counter;