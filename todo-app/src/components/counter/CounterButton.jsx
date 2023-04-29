import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterButton extends Component {

    //State Best Practics.
    //Define initial state in a constructor
    //state => countetr 0
    constructor() {
        super(); //Error 1
        // this.state = {
        //     counter : 0,
        // }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    render(){
        return (
            <div className="counter">
             <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
             <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
       );
    }

    // increment() { 
    // this.setState(
    //     (prevState) => {
    //       return {counter : prevState.counter + this.props.by}
    //     }
    //   );

    //   this.props.incrementMethod(this.props.by);
    // }

    // decrement() { 
    //     this.setState(
    //         (prevState) => {
    //           return {counter : prevState.counter - this.props.by}
    //         }
    //       );
    
    //       this.props.decrementMethod(this.props.by);
    //     }
  }

  //Setting default Value of Propeties. 
  CounterButton.defaultProps = {
      by : 1
  }
 //Type checking which prevents invalid type being assignment to components.
  CounterButton.propTypes = {
    by : PropTypes.number
  }

  export default CounterButton;
  